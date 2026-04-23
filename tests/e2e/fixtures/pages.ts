/**
 * Shared page + viewport fixtures for the e2e suites.
 *
 * Keep this file the single source of truth for the list of
 * smoke-tested pages so smoke.spec.ts, dark-mode.spec.ts, and
 * apps-page.spec.ts stay in sync.
 */

export interface PageTarget {
  /** Human-readable name (used in test titles). */
  name: string;
  /** Path relative to baseURL. */
  path: string;
}

export const SMOKE_PAGES: readonly PageTarget[] = [
  { name: 'home', path: '/' },
  { name: 'apps', path: '/apps' },
  { name: 'get a pod', path: '/get_a_pod' },
  { name: 'for developers', path: '/for_developers' },
  { name: 'for users', path: '/for_users' },
  { name: 'community', path: '/community' },
] as const;

export const VIEWPORTS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 375, height: 667 },
} as const;
