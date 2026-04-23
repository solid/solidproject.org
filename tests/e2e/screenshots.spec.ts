import { test, expect } from '@playwright/test';

/**
 * Screenshot baselines for /apps. Captured on first run, diffed on
 * every subsequent run. Baselines are committed alongside the spec;
 * `*-actual-*.png` and `*-diff-*.png` are in .gitignore so only
 * intentional baseline updates land in version control.
 *
 * To refresh a baseline after a deliberate design change, run:
 *   npx playwright test screenshots.spec.ts --update-snapshots
 * and review the PNG diff in the commit.
 *
 * We capture:
 *   - `/apps` hero + toolbar region at desktop 1280 (above the fold).
 *   - `/apps` toolbar + first-row grid at mobile 375 (the overflow
 *     region the PR-960 bug shipped in).
 *   - `/apps` full page at desktop 1280 (a single source-of-truth
 *     layout snapshot).
 *
 * Dark-mode screenshots are intentionally NOT captured in this
 * commit; the theme-designer adds them once palette tokens are live.
 */

test.describe('screenshot baselines: apps page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/apps.html', { waitUntil: 'networkidle' });
    // Disable animations + caret blink + scrollbars so the snapshot
    // is pixel-stable between runs. Playwright's toHaveScreenshot
    // already passes animations: disabled via config, but hero CTAs
    // still flash without this.
    await page.addStyleTag({
      content: `
        *, *::before, *::after {
          transition: none !important;
          animation-duration: 0.001s !important;
          caret-color: transparent !important;
        }
      `,
    });

    // If the built _site/ is stale (missing the PR-960 apps page
    // redesign: .apps-hero / .apps-toolbar), skip — baselines
    // captured against old markup are misleading. This branch is
    // primarily a local-dev safety net; CI rebuilds Jekyll fresh so
    // this skip should never fire there.
    const heroPresent = await page.locator('.apps-hero').count();
    const toolbarPresent = await page.locator('.apps-toolbar').count();
    test.skip(
      heroPresent === 0 || toolbarPresent === 0,
      'Built _site/apps.html is stale (missing .apps-hero or .apps-toolbar). Rebuild Jekyll and re-run.',
    );
  });

  test('apps hero + toolbar @ desktop 1280', async ({ page }, testInfo) => {
    test.skip(
      testInfo.project.name !== 'desktop-chrome',
      'Desktop baseline is project-scoped to desktop-chrome to keep the snapshot set small.',
    );
    const hero = page.locator('.apps-hero');
    await expect(hero).toBeVisible();
    // Capture hero + the toolbar + first row of the grid (what sits
    // above the fold at 1280x800).
    await expect(page).toHaveScreenshot('apps-above-the-fold-desktop.png', {
      clip: { x: 0, y: 0, width: 1280, height: 800 },
      fullPage: false,
    });
  });

  test('apps toolbar + first row @ mobile 375', async ({ page }, testInfo) => {
    test.skip(
      testInfo.project.name !== 'mobile-chrome',
      'Mobile baseline is project-scoped to mobile-chrome (Pixel 5 device profile).',
    );
    // Pixel 5 defaults to 393x851; force the exact PR-960 overflow
    // viewport so this matches the mobile-overflow regression test.
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/apps.html', { waitUntil: 'networkidle' });
    await expect(page).toHaveScreenshot('apps-above-the-fold-mobile.png', {
      clip: { x: 0, y: 0, width: 375, height: 667 },
      fullPage: false,
    });
  });

  test('apps full page @ desktop 1280', async ({ page }, testInfo) => {
    test.skip(
      testInfo.project.name !== 'desktop-chrome',
      'Full-page baseline is project-scoped to desktop-chrome.',
    );
    await expect(page).toHaveScreenshot('apps-full-page-desktop.png', {
      fullPage: true,
    });
  });
});
