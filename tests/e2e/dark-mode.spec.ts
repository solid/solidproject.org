import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { SMOKE_PAGES } from './fixtures/pages';

/**
 * Dark-mode contrast regression suite.
 *
 * Dark mode is opt-in on this site: a first-time visitor always sees the
 * light palette regardless of their OS `prefers-color-scheme`. Dark is
 * only active when the user has pressed the header theme toggle, which
 * persists `solid-theme=dark` into localStorage. The no-flash bootstrap
 * at the top of `_layouts/default.html` reads that entry and sets
 * `<html data-theme="dark">` before the first paint.
 *
 * These tests reproduce the opt-in path by seeding localStorage via
 * `page.addInitScript` BEFORE navigation. The no-flash bootstrap then
 * runs against the pre-seeded storage and paints dark from the first
 * frame. We then run axe-core's color-contrast rules.
 */

const FIXME_TAG = '#960 regression';

async function activateDarkMode(page: import('@playwright/test').Page) {
  await page.addInitScript(() => {
    try {
      window.localStorage.setItem('solid-theme', 'dark');
    } catch {
      /* storage blocked — test will simply see light and
         the data-theme-attribute assertion below will fail meaningfully. */
    }
  });
}

test.describe('PR-960 regression: dark-mode contrast', () => {
  for (const target of SMOKE_PAGES) {
    test(
      `${target.name}: axe color-contrast passes when dark mode is opted in (${FIXME_TAG})`,
      async ({ page }) => {
        await activateDarkMode(page);
        await page.goto(target.path, { waitUntil: 'networkidle' });

        // Confirm the no-flash bootstrap honoured the seeded localStorage
        // and actually set <html data-theme="dark">. If this is absent,
        // the page is painted light and color-contrast assertions are
        // meaningless.
        const dataTheme = await page.evaluate(
          () => document.documentElement.getAttribute('data-theme'),
        );
        expect(
          dataTheme,
          'Dark mode must be active (html[data-theme=dark]) after seeding localStorage[solid-theme]=dark.',
        ).toBe('dark');

        // The project's a11y target is WCAG2AA (see .pa11yci `standard`).
        // `color-contrast` is the AA rule (4.5:1 normal, 3:1 large);
        // `color-contrast-enhanced` is the AAA rule (7:1) which the
        // design has not committed to. Only assert AA here so the
        // dark-mode regression test matches the documented standard.
        const results = await new AxeBuilder({ page })
          .withRules(['color-contrast'])
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
  // descriptions use a secondary text colour on top of a semi-tinted
  // surface.
  test.fixme(
    `apps tile descriptions + source links hit AA contrast in dark mode (${FIXME_TAG})`,
    async ({ page }) => {
      await activateDarkMode(page);
      await page.goto('/apps.html', { waitUntil: 'networkidle' });

      const dataTheme = await page.evaluate(
        () => document.documentElement.getAttribute('data-theme'),
      );
      expect(dataTheme).toBe('dark');

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

// Smoke assertion for the opt-in behaviour itself: a first-time visitor
// (no localStorage, no toggle pressed) must NOT land on dark mode,
// regardless of the OS prefers-color-scheme signal.
test.describe('PR-960: dark mode is opt-in, not system-driven', () => {
  test('first-time visitor with prefers-color-scheme: dark stays on light', async ({ page }) => {
    // Do not seed localStorage. Emulate a dark OS preference; the site
    // must still default to light.
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/apps.html', { waitUntil: 'networkidle' });
    const dataTheme = await page.evaluate(
      () => document.documentElement.getAttribute('data-theme'),
    );
    expect(
      dataTheme,
      'Fresh visit with OS dark preference should resolve to light, not dark.',
    ).toBe('light');
  });
});
