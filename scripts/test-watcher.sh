#!/usr/bin/env bash
# Long-lived loop that polls the feature branch on the `jeswr` remote
# for new commits, runs the Playwright e2e suite against each, and
# auto-reverts commits whose parent was watcher-validated PASS but
# which now FAIL.
#
# Designed to run under the Claude Code `Monitor` tool with
# `persistent: true` — each echo line becomes a conversation
# notification to the main session.
#
# Read the solid-site-test-watcher persona at
# .claude/agents/solid-site-test-watcher.md for guard-rail context
# before modifying this file.
#
# Key safety design: the watcher runs in a DEDICATED `git worktree`
# so it never touches the implementer's working copy. The main
# checkout remains on `feat/apps-page-redesign` (or whatever branch
# Jesse is editing) untouched. The watcher's worktree is on a
# detached HEAD for tests, and only switches to a real branch when
# it's about to push an auto-revert.
#
# Manual invocation (one-off, not a persistent monitor):
#     WATCHER_ONCE=1 scripts/test-watcher.sh
set -eu -o pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANCH="${WATCHER_BRANCH:-feat/apps-page-redesign}"
REMOTE="${WATCHER_REMOTE:-jeswr}"
INTERVAL="${WATCHER_INTERVAL:-45}"
PROJECT="${WATCHER_PROJECT:-desktop-chrome}"
LOG="${WATCHER_LOG:-/tmp/solid-site-watcher.log}"
WORKTREE="${WATCHER_WORKTREE:-/tmp/solid-site-watcher-wt}"
LEDGER="${WATCHER_LEDGER:-/tmp/solid-site-watcher-ledger}"

# --- setup worktree once --------------------------------------------

emit() { printf '%s\n' "$*"; }

ensure_worktree() {
  if [ -d "$WORKTREE/.git" ] || [ -f "$WORKTREE/.git" ]; then
    return 0
  fi
  # Create the worktree using the main repo as the reference. The
  # worktree starts on a detached HEAD at the current remote tip.
  cd "$REPO_DIR"
  git fetch "$REMOTE" "$BRANCH" --quiet 2>/dev/null || {
    emit "[watcher:ERROR] initial fetch $REMOTE/$BRANCH failed"
    return 1
  }
  git worktree add --detach "$WORKTREE" "$REMOTE/$BRANCH" >/dev/null 2>&1 || {
    emit "[watcher:ERROR] git worktree add $WORKTREE failed"
    return 1
  }
  # Install Playwright browsers in the worktree if not already (they
  # live under node_modules/.cache in the shared-node_modules
  # directory but the playwright binary cache is user-global).
  # No action needed here — Playwright's own install handles it.
}

touch "$LEDGER"
watcher_passed() { /usr/bin/grep -qxF "$1" "$LEDGER"; }
watcher_mark_pass() { printf '%s\n' "$1" >> "$LEDGER"; }

commit_requests_skip() {
  git -C "$WORKTREE" log -1 --pretty=%B "$1" | /usr/bin/grep -qE '\[watcher:[[:space:]]*skip\]'
}
is_auto_revert() {
  git -C "$WORKTREE" log -1 --pretty=%B "$1" | /usr/bin/grep -qF '[watcher:auto-revert]'
}

# --- core loop -------------------------------------------------------

run_once() {
  ensure_worktree || return 0

  # Fetch in the worktree so we stay aligned with the remote branch
  # state without ever touching the main checkout's fetch state.
  git -C "$WORKTREE" fetch "$REMOTE" "$BRANCH" --quiet 2>/dev/null || {
    emit "[watcher:ERROR] git fetch failed"
    return 0
  }
  local latest
  latest=$(git -C "$WORKTREE" rev-parse "$REMOTE/$BRANCH" 2>/dev/null) || {
    emit "[watcher:ERROR] rev-parse $REMOTE/$BRANCH failed"
    return 0
  }

  if watcher_passed "$latest"; then
    return 0
  fi
  if is_auto_revert "$latest"; then
    watcher_mark_pass "$latest"
    emit "[watcher:PASS] $latest (previous auto-revert, skipped)"
    return 0
  fi
  if commit_requests_skip "$latest"; then
    watcher_mark_pass "$latest"
    emit "[watcher:PASS] $latest (commit requested watcher skip)"
    return 0
  fi

  emit "[watcher:test] $latest"

  # Check out the commit in the WORKTREE (detached HEAD). The main
  # repo's working copy is unaffected.
  git -C "$WORKTREE" checkout --quiet --detach "$latest" 2>>"$LOG" || {
    emit "[watcher:ERROR] worktree checkout $latest failed"
    return 0
  }

  # Install deps if missing (first-run in a fresh worktree).
  if [ ! -d "$WORKTREE/node_modules" ]; then
    (cd "$WORKTREE" && npm ci --silent >>"$LOG" 2>&1) || {
      emit "[watcher:ERROR] npm ci in worktree failed"
      return 0
    }
  fi

  # Run the targeted suite.
  if (cd "$WORKTREE" && npm run test:e2e -- --project="$PROJECT" --reporter=line >"$LOG" 2>&1); then
    emit "[watcher:PASS] $latest"
    watcher_mark_pass "$latest"
    return 0
  fi

  local failing
  failing=$(/usr/bin/grep -oE 'FAIL.*' "$LOG" | /usr/bin/head -1 | /usr/bin/tr -d '\n' || true)
  emit "[watcher:FAIL] $latest — ${failing:-unknown test}"

  # --- auto-revert guard rails ---------------------------------------

  local parent
  parent=$(git -C "$WORKTREE" rev-parse "${latest}^" 2>/dev/null || true)
  if [ -z "$parent" ]; then
    emit "[watcher:HOLD] $latest — no parent resolved, not reverting"
    return 0
  fi
  if ! watcher_passed "$parent"; then
    emit "[watcher:HOLD] $latest — parent $parent not watcher-validated, not reverting"
    return 0
  fi
  local last_pass
  last_pass=$(/usr/bin/tail -1 "$LEDGER" 2>/dev/null || true)
  if [ "$parent" != "$last_pass" ]; then
    emit "[watcher:HOLD] $latest — multiple commits since last pass, manual bisect needed"
    return 0
  fi

  # --- auto-revert execution -----------------------------------------

  # Put the worktree on a real branch aligned with the remote tip, so
  # the revert commits to a branch and the push is fast-forward-safe.
  git -C "$WORKTREE" checkout --quiet -B "$BRANCH" "$REMOTE/$BRANCH" 2>>"$LOG" || {
    emit "[watcher:ERROR] could not align worktree branch to $REMOTE/$BRANCH"
    return 0
  }
  if ! git -C "$WORKTREE" revert --no-edit --no-gpg-sign "$latest" >>"$LOG" 2>&1; then
    emit "[watcher:ERROR] git revert $latest failed"
    return 0
  fi
  # Tag the revert so re-test skips it.
  git -C "$WORKTREE" commit --amend --no-gpg-sign \
    -m "$(git -C "$WORKTREE" log -1 --pretty=%B HEAD)

[watcher:auto-revert]" >>"$LOG" 2>&1 || true

  if git -C "$WORKTREE" push "$REMOTE" "HEAD:refs/heads/$BRANCH" >>"$LOG" 2>&1; then
    local new_head
    new_head=$(git -C "$WORKTREE" rev-parse HEAD)
    emit "[watcher:REVERTED] $latest reverted as $new_head; pushed"
    watcher_mark_pass "$new_head"
  else
    emit "[watcher:ERROR] auto-revert created but push to $REMOTE failed (non-fast-forward?)"
  fi
}

# --- main loop -------------------------------------------------------

if [ "${WATCHER_ONCE:-0}" = "1" ]; then
  run_once
  exit 0
fi

while true; do
  run_once
  sleep "$INTERVAL"
done
