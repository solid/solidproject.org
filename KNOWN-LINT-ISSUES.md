# Known lint issues — baseline for solidproject.org

This document records the lint rules that were **disabled, downgraded,
or had files excluded** when `htmlhint`, `stylelint`, and `pa11y-ci`
were first wired up (commit trio under
`feat/apps-page-redesign`). The goal of linting here is to catch
**new** regressions introduced by PR diffs, not to enforce a clean-up
march on the existing content.

If you are the `solid-site-a11y-sweeper` (or any other cleanup agent),
this file is your to-do list.

## htmlhint — `.htmlhintrc`

Ran against `*.html` and `_layouts/**/*.html`. 23 source files.

### First-run violation counts

| Rule                 | Count | Action                                            |
| -------------------- | ----: | ------------------------------------------------- |
| `doctype-first`      |    23 | **Disabled** globally. Reason below.              |
| `tag-pair`           |     3 | Enabled; offending files ignored. See below.      |
| `spec-char-escape`   |     3 | Enabled; offending files ignored. See below.      |
| `attr-lowercase`     |     1 | Enabled; offending file ignored. See below.       |

### Rule: `doctype-first` — DISABLED

Every Jekyll source page begins with a YAML front-matter block:

```
---
permalink: /foo
layout: default
---
<h1>...</h1>
```

htmlhint sees `---` as non-comment content before `<!DOCTYPE>` and
flags every page. The actual `<!DOCTYPE html>` lives in
`_layouts/default.html` and is emitted into every built page in
`_site/`. Checking it at the source level is not meaningful; pa11y-ci
will exercise the built pages in CI.

### Ignored files (via `--ignore` in `npm run lint:html`)

These files have pre-existing markup bugs that the sweeper agent
should fix before we remove them from the ignore list:

- **`press.html`** — has a stray `<dd>Ruben Verborgh/dd>` (unclosed
  `dd`), and a quoted URL with raw `<` / `>` in an `<a href=…>` around
  line 215, yielding `tag-pair` + `spec-char-escape` errors.
- **`specification.html`** — unbalanced `</p>` inside the Panels list
  around line 30.
- **`events.html`** — `<iframe allowTransparency="true">` uses the
  legacy camelCase attribute name.

Once the sweeper repairs these, remove the corresponding entry from
the `--ignore` argument in `package.json` → `scripts.lint:html`.

## stylelint — `.stylelintrc.json`

Ran against `assets/css/**/*.css`. 9 source files.

### First-run violation counts

| Rule                            | Count | Action                    |
| ------------------------------- | ----: | ------------------------- |
| `color-function-alias-notation` |     9 | **Disabled** (cosmetic).  |
| `CssSyntaxError` on styles.css  |     1 | File ignored (Jekyll).    |

### Rule: `color-function-alias-notation` — DISABLED

Enforces `rgb()` over `rgba()` when alpha is present in the new CSS
Color 4 syntax. The existing stylesheets use the traditional
`rgba(r,g,b,a)` form throughout; rewriting is cosmetic and would
produce a noisy diff. Re-enable once all legacy `rgba()` calls have
been migrated.

### Ignored file: `assets/css/styles.css`

That file is not real CSS — it is a Jekyll template that concatenates
the other stylesheets at build time (YAML front-matter + Liquid
`{% include_relative %}`). stylelint cannot parse it.

### Rules disabled up-front in `extends stylelint-config-standard`

A block of ~25 "style opinion" rules (selector naming patterns,
shorthand preferences, empty-line-before rules, etc.) are pre-disabled
in `.stylelintrc.json`. These are cosmetic and were disabled to keep
the baseline green without mass reformatting. See the full list at
the top of `.stylelintrc.json`.

## pa11y-ci — `.pa11yci`

pa11y-ci cannot run during this setup — it requires the Jekyll site
to be built and served. A dry-run baseline will be captured the first
time the GitHub Actions workflow runs. Expected output at that point:
the sweeper agent should pick up axe-core issues (missing alt text,
contrast, etc.) from the workflow summary and log them here.

Ignored rules / thresholds are currently **empty** — WCAG2AA
zero-error target. If the first real run produces >50 occurrences of
any single axe rule, add the rule id to
`defaults.ignore` in `.pa11yci` and document the reason in this
section.

## Triage recipe for future contributors

1. If a PR adds a new `*.html` or CSS file that trips one of these
   rules, **fix the PR** — do not widen the ignore list.
2. If a rule change in the tooling produces a new wave of violations
   on pre-existing files, add it here and disable it **locally** in
   the rc file — do not edit existing content files from the tooling
   PR.
3. When clearing an entry here, include a `refs KNOWN-LINT-ISSUES.md`
   in the cleanup commit message so this doc stays accurate.
