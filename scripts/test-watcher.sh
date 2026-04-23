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
# Manual invocation (one-off, not a persistent monitor):
#     WATCHER_ONCE=1 scripts/test-watcher.sh
set -eu -o pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_DIR"

BRANCH="${WATCHER_BRANCH:-feat/apps-page-redesign}"
REMOTE="${WATCHER_REMOTE:-jeswr}"
INTERVAL="${WATCHER_INTERVAL:-45}"
PROJECT="${WATCHER_PROJECT:-desktop-chrome}"
LOG="${WATCHER_LOG:-/tmp/solid-site-watcher.log}"

# --- helpers ---------------------------------------------------------

# Print a one-line event. Keeping every event on its own line makes it
# a Monitor-friendly notification.
emit() { printf '%s\n' "$*"; }

# Has this SHA been validated (PASS) by the watcher already in this
# session? We keep a small on-disk ledger so restarts don't re-test.
LEDGER="${WATCHER_LEDGER:-/tmp/solid-site-watcher-ledger}"
touch "$LEDGER"
watcher_passed() { /usr/bin/grep -qxF "$1" "$LEDGER"; }
watcher_mark_pass() { printf '%s\n' "$1" >> "$LEDGER"; }

# Has the commit asked to be skipped? Respect a [watcher: skip] trailer.
commit_requests_skip() {
  git log -1 --pretty=%B "$1" | /usr/bin/grep -qE '\[watcher:[[:space:]]*skip\]'
}

# Is this commit a watcher-authored auto-revert? Don't re-test them.
is_auto_revert() {
  git log -1 --pretty=%B "$1" | /usr/bin/grep -qF '[watcher:auto-revert]'
}

run_once() {
  git fetch "$REMOTE" "$BRANCH" --quiet 2>/dev/null || {
    emit "[watcher:ERROR] git fetch failed"
    return 0
  }
  local latest
  latest=$(git rev-parse "$REMOTE/$BRANCH" 2>/dev/null) || {
    emit "[watcher:ERROR] git rev-parse $REMOTE/$BRANCH failed"
    return 0
  }

  if watcher_passed "$latest"; then
    return 0   # already tested
  fi
  if is_auto_revert "$latest"; then
    watcher_mark_pass "$latest"
    emit "[watcher:SKIP] $latest is a previous auto-revert"
    return 0
  fi
  if commit_requests_skip "$latest"; then
    watcher_mark_pass "$latest"
    emit "[watcher:SKIP] $latest — commit message requests watcher skip"
    return 0
  fi

  emit "[watcher:test] $latest"

  # Check out the commit in a detached head so we don't mess with the
  # implementer's working branch pointer.
  git checkout --quiet "$latest" 2>>"$LOG" || {
    emit "[watcher:ERROR] git checkout $latest failed"
    return 0
  }

  # Run the targeted suite — desktop-chrome project only, line reporter.
  # Full matrix runs on PR via GitHub Actions.
  if npm run test:e2e -- --project="$PROJECT" --reporter=line >"$LOG" 2>&1; then
    emit "[watcher:PASS] $latest"
    watcher_mark_pass "$latest"
    git checkout --quiet "$BRANCH" 2>>"$LOG" || true
    return 0
  fi

  # Failure. Surface the first failing test name.
  local failing
  failing=$(/usr/bin/grep -oE 'FAIL.*' "$LOG" | /usr/bin/head -1 | /usr/bin/tr -d '\n' || true)
  emit "[watcher:FAIL] $latest — ${failing:-unknown test}"

  # Guard rails for auto-revert.
  local parent
  parent=$(git rev-parse "${latest}^" 2>/dev/null || true)
  if [ -z "$parent" ]; then
    emit "[watcher:HOLD] $latest — no parent resolved, not reverting"
    return 0
  fi
  if ! watcher_passed "$parent"; then
    emit "[watcher:HOLD] $latest — parent $parent not watcher-validated, not reverting"
    return 0
  fi
  # Single-commit gap since last pass? (parent == latest that we last
  # tested)
  local last_pass
  last_pass=$(/usr/bin/tail -1 "$LEDGER" 2>/dev/null || true)
  if [ "$parent" != "$last_pass" ]; then
    emit "[watcher:HOLD] $latest — multiple commits since last pass, manual bisect needed"
    return 0
  fi

  # Auto-revert.
  git checkout --quiet "$BRANCH" 2>>"$LOG" || true
  if git revert --no-edit --no-gpg-sign "$latest" >>"$LOG" 2>&1; then
    # Tag the revert so we don't re-test it.
    git commit --amend --no-gpg-sign \
      -m "$(git log -1 --pretty=%B HEAD)

[watcher:auto-revert]" >>"$LOG" 2>&1 || true
    if git push "$REMOTE" "$BRANCH" >>"$LOG" 2>&1; then
      emit "[watcher:REVERTED] $latest reverted; pushed"
      watcher_mark_pass "$(git rev-parse HEAD)"
    else
      emit "[watcher:ERROR] auto-revert created but push to $REMOTE failed"
    fi
  else
    emit "[watcher:ERROR] git revert $latest failed"
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
