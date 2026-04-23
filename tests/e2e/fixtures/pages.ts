/**
 * Shared page + viewport fixtures for the e2e suites.
 *
 * Specs import from here so smoke.spec.ts, dark-mode.spec.ts, and
 * apps-page.spec.ts stay aligned. playwright.config.ts also imports
 * DESKTOP_VIEWPORT so the configured browser size and the fixture
 * constant cannot drift.
 */

export interface PageTarget {
  /** Human-readable name (used in test titles). */
  name: string;
  /** Path relative to baseURL. */
  path: string;
}

/**
 * Smoke target paths deliberately use `.html` suffixes where the
 * built `_site/` has BOTH a top-level `foo.html` AND a `foo/`
 * directory (subpages). In production Netlify rewrites `/foo` to
 * `/foo.html` via `_redirects`; http-server (which we use under
 * Playwright and pa11y-ci) has no such rewrite and serves the
 * directory listing first. The `.html` form exercises the same
 * rendered page the rewrites ultimately reach.
 */
export const SMOKE_PAGES: readonly PageTarget[] = [
  { name: 'home', path: '/' },
  { name: 'apps', path: '/apps.html' },
  { name: 'get a pod', path: '/get_a_pod.html' },
  { name: 'for developers', path: '/for_developers.html' },
  { name: 'for users', path: '/for_users.html' },
  { name: 'community', path: '/community.html' },
] as const;

export const DESKTOP_VIEWPORT = { width: 1280, height: 800 } as const;

// The mobile project in playwright.config.ts uses Playwright's Pixel 5
// device descriptor (393x851), which has a touch user-agent + devicePixel
// ratio settings we want for realism. This constant is for tests that
// call page.setViewportSize() directly (e.g. mobile-overflow test).
export const MOBILE_VIEWPORT = { width: 375, height: 667 } as const;

export const VIEWPORTS = {
  desktop: DESKTOP_VIEWPORT,
  mobile: MOBILE_VIEWPORT,
} as const;
