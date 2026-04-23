import { defineConfig, devices } from '@playwright/test';
import { DESKTOP_VIEWPORT } from './tests/e2e/fixtures/pages';

/**
 * Playwright configuration for solidproject.org visual + functional QA.
 *
 * The webServer block reuses the existing `lint:a11y:serve` pattern:
 * the Jekyll site is assumed to be pre-built into `_site/` (the CI
 * workflow runs `bundle exec jekyll build` before Playwright), and
 * `http-server` serves it statically on port 4000. `reuseExistingServer`
 * is true for local iteration so contributors can keep their own
 * `bundle exec jekyll serve` running.
 *
 * See .github/workflows/visual-qa.yml for the CI wiring.
 */
const PORT = 4000;
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './tests/e2e',
  outputDir: './test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [['html', { open: 'never' }], ['github']]
    : [['list'], ['html', { open: 'never' }]],

  expect: {
    // Screenshot baselines tolerate minor font-rendering differences
    // between local macOS and CI linux so the same baseline works.
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    },
  },

  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: DESKTOP_VIEWPORT,
      },
    },
    {
      name: 'mobile-chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'desktop-firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: DESKTOP_VIEWPORT,
      },
    },
    {
      name: 'desktop-dark',
      use: {
        ...devices['Desktop Chrome'],
        viewport: DESKTOP_VIEWPORT,
        colorScheme: 'dark',
      },
    },
  ],

  webServer: {
    command: 'npx http-server _site -p 4000 -s -c-1 -a 127.0.0.1',
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: 'ignore',
    stderr: 'pipe',
  },
});
