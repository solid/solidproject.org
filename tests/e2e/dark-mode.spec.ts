import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { SMOKE_PAGES } from './fixtures/pages';

/**
 * Dark-mode contrast regression suite. Gated on the theme-designer's
 * work landing: each test starts as `test.fixme` so CI stays green
 * today; the theme-designer flips the marker the same commit they
 * ship the `[data-theme]` tokens and the palette.
 *
 * The tests emulate `prefers-color-scheme: dark` and run axe-core's
 * `color-contrast` + `color-contrast-enhanced` rules across the top
 * six pages. We gate on the presence of a `data-theme` attribute on
 * `<html>` or `<body>`: that attribute is the theme-designer's hook
 * for opting a page into the palette tokens, and its absence is the
 * signal that dark mode hasn't shipped yet.
 *
 * When you flip a fixme here, run the whole file first — the palette
 * should pass on every page, not just /apps.
 */

const FIXME_TAG = '#960 follow-up';

test.describe('PR-960 regression: dark-mode contrast', () => {
  for (const target of SMOKE_PAGES) {
    test.fixme(
      `${target.name}: axe color-contrast passes at prefers-color-scheme: dark (${FIXME_TAG})`,
      async ({ page }) => {
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.goto(target.path, { waitUntil: 'networkidle' });

        // Gate on the theme-designer's tokens actually being live.
        // Without a data-theme attribute, the palette still ships the
        // light values even under prefers-color-scheme: dark, so
        // contrast is undefined — we'd flag a bug that the light CSS
        // is not yet responsible for. The theme-designer removes this
        // skip by shipping the attribute.
        const tokensShipped = await page.evaluate(
          () =>
            document.documentElement.hasAttribute('data-theme') ||
            document.body.hasAttribute('data-theme'),
        );
        test.skip(
          !tokensShipped,
          'Theme tokens not yet shipped (no data-theme attribute on <html>/<body>).',
        );

        const results = await new AxeBuilder({ page })
          .withRules(['color-contrast', 'color-contrast-enhanced'])
          .analyze();

        expect(
          results.violations,
          `Dark-mode contrast violations on ${target.path}:\n${results.violations
            .flatMap((v) =>
              v.nodes.map(
                (n) =>
                  `  - ${v.id} @ ${n.target.join(' > ')}:\n      ${n.failureSummary?.replace(/\n/g, '\n      ')}`,
              ),
            )
            .join('\n')}`,
        ).toEqual([]);
      },
    );
  }

  // A specific regression pin for the /apps tile text — this is the
  // surface most likely to regress on dark mode because tile
  // descriptions use a secondary text color that currently fails
  // contrast under the light palette on top of white tiles.
  test.fixme(
    `apps tile descriptions + source links hit AA contrast in dark mode (${FIXME_TAG})`,
    async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto('/apps.html', { waitUntil: 'networkidle' });

      const tokensShipped = await page.evaluate(
        () =>
          document.documentElement.hasAttribute('data-theme') ||
          document.body.hasAttribute('data-theme'),
      );
      test.skip(!tokensShipped, 'Theme tokens not yet shipped.');

      // Scope axe to the tile grid — body-wide violations are covered
      // by the smoke-page loop above.
      const results = await new AxeBuilder({ page })
        .include('ul.tiles.tile-links')
        .withRules(['color-contrast'])
        .analyze();

      expect(results.violations).toEqual([]);
    },
  );
});
