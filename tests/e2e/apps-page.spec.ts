import { test, expect, type Locator } from '@playwright/test';
import { MOBILE_VIEWPORT } from './fixtures/pages';

/**
 * Six regressions discovered during human review of PR #960.
 *
 * ALL SIX start life as `test.fixme(...)` so CI stays green today —
 * Playwright marks them expected-to-skip and does not execute the
 * body. The frontend-engineer flips `test.fixme` -> `test` one by one
 * as each fix lands — that removal is the visible proof the bug is
 * gone. (Every fixme title carries the `#960 follow-up` tag so grep /
 * test --grep can pull the backlog out of the run.)
 *
 * Do not tighten any of these to bare `test(...)` from this agent's
 * chair. That's the frontend-engineer's sign-off.
 */

const APPS_PATH = '/apps.html';
const FIXME_TAG = '#960 follow-up';

test.describe('PR-960 regression', () => {
  // ---------------------------------------------------------------
  // 1. chevron-once
  // ---------------------------------------------------------------
  test.fixme(
    `chevron-once: every .tiles.tile-links > li > a has exactly one "Open app" ::after, and no descendant <a> inside .app-source has one (${FIXME_TAG})`,
    async ({ page }) => {
      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      // Direct-child anchors of the tile-links list items.
      const tileAnchorMatches = await page.evaluate(() => {
        const lists = document.querySelectorAll('ul.tiles.tile-links');
        const offenders: { html: string; afterCount: number; afterText: string }[] = [];

        for (const list of lists) {
          for (const li of Array.from(list.children)) {
            // Direct-child <a> of the <li>: the tile wrapper link.
            const directAnchors = Array.from(li.children).filter(
              (c): c is HTMLAnchorElement => c.tagName === 'A',
            );
            for (const anchor of directAnchors) {
              const afterStyle = window.getComputedStyle(anchor, '::after');
              const content = afterStyle.content ?? '';
              // computedStyle content is quoted ("Open app →") OR "none"
              const hasAfter = content !== 'none' && content !== 'normal' && content !== '';
              const afterText = hasAfter ? content.replace(/^"|"$/g, '') : '';
              const matchesOpenApp = afterText.includes('Open app');
              // Expect exactly one "Open app" ::after per direct-child anchor.
              if (!matchesOpenApp) {
                offenders.push({
                  html: anchor.outerHTML.slice(0, 120),
                  afterCount: hasAfter ? 1 : 0,
                  afterText,
                });
              }
            }
          }
        }
        return offenders;
      });

      expect(
        tileAnchorMatches,
        `Direct-child anchors missing a single "Open app" ::after:\n${tileAnchorMatches
          .map((o) => `  - ${o.html} (::after=${JSON.stringify(o.afterText)})`)
          .join('\n')}`,
      ).toEqual([]);

      // Zero ::after chevron on any <a> inside .app-source.
      const sourceAnchorOffenders = await page.evaluate(() => {
        const anchors = document.querySelectorAll('.app-source a');
        const offenders: { html: string; afterText: string }[] = [];
        for (const anchor of Array.from(anchors)) {
          const afterStyle = window.getComputedStyle(anchor, '::after');
          const content = afterStyle.content ?? '';
          if (content === 'none' || content === 'normal' || content === '') continue;
          const afterText = content.replace(/^"|"$/g, '');
          if (afterText.includes('Open app')) {
            offenders.push({ html: (anchor as HTMLElement).outerHTML.slice(0, 160), afterText });
          }
        }
        return offenders;
      });

      expect(
        sourceAnchorOffenders,
        `.app-source anchors rendering a duplicate "Open app" chevron:\n${sourceAnchorOffenders
          .map((o) => `  - ${o.html}`)
          .join('\n')}`,
      ).toEqual([]);
    },
  );

  // ---------------------------------------------------------------
  // 2. mobile-overflow
  // ---------------------------------------------------------------
  test.fixme(
    `mobile-overflow: no descendant on /apps has horizontal overflow at 375x667 (${FIXME_TAG})`,
    async ({ page }) => {
      await page.setViewportSize(MOBILE_VIEWPORT);
      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      const overflowers = await page.evaluate(() => {
        const offenders: { selector: string; scrollWidth: number; clientWidth: number }[] = [];
        const all = document.querySelectorAll('*');
        for (const el of Array.from(all)) {
          const html = el as HTMLElement;
          // Skip elements that have no layout footprint or are
          // invisible — a display:none / visibility:hidden element
          // has no user-visible overflow, and a zero-size box can't
          // overflow anything.
          const rect = html.getBoundingClientRect();
          const cs = window.getComputedStyle(html);
          if (cs.display === 'none' || cs.visibility === 'hidden') continue;
          if (rect.width === 0 || rect.height === 0) continue;
          // Skip elements that intentionally hide overflow — the
          // scrollWidth > clientWidth signal there is a deliberate
          // clip, not a visible overflow bug.
          if (cs.overflowX === 'hidden' || cs.overflowX === 'clip') continue;
          if (cs.overflowX === 'scroll' || cs.overflowX === 'auto') continue;
          if (html.scrollWidth > html.clientWidth + 1) {
            // Shortest-path selector: tag + id + class list.
            const id = html.id ? `#${html.id}` : '';
            const className = typeof html.className === 'string' ? html.className : '';
            const cls = className
              ? '.' + className.trim().split(/\s+/).join('.')
              : '';
            offenders.push({
              selector: `${html.tagName.toLowerCase()}${id}${cls}`.slice(0, 200),
              scrollWidth: html.scrollWidth,
              clientWidth: html.clientWidth,
            });
          }
        }
        return offenders;
      });

      expect(
        overflowers,
        `Elements overflowing horizontally at 375x667:\n${overflowers
          .map((o) => `  - ${o.selector} (scrollWidth=${o.scrollWidth}, clientWidth=${o.clientWidth})`)
          .join('\n')}`,
      ).toEqual([]);
    },
  );

  // ---------------------------------------------------------------
  // 3. toolbar-alignment
  // ---------------------------------------------------------------
  test.fixme(
    `toolbar-alignment: .apps-toolbar labels + inputs share a Y bounding-box within 1px at desktop (${FIXME_TAG})`,
    async ({ page }, testInfo) => {
      // This test is a desktop-only concern; mobile stacks the controls.
      test.skip(
        testInfo.project.name === 'mobile-chrome',
        'Toolbar alignment is a desktop concern; mobile stacks the controls vertically.',
      );

      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      const toolbar = page.locator('.apps-toolbar');
      await expect(toolbar).toBeVisible();

      // We expect, at desktop width, the inputs (search field + two
      // selects) to share a consistent Y baseline.
      const candidates: Locator[] = [
        page.locator('#app-search'),
        page.locator('#sort-select'),
        page.locator('#category-filter'),
      ];

      const boxes = await Promise.all(candidates.map((c) => c.boundingBox()));
      for (let i = 0; i < boxes.length; i++) {
        expect(boxes[i], `input ${i} had no bounding box`).not.toBeNull();
      }

      const tops = boxes.map((b) => b!.y);
      const minTop = Math.min(...tops);
      const maxTop = Math.max(...tops);
      expect(
        maxTop - minTop,
        `Toolbar inputs disagree on Y top by ${maxTop - minTop}px (tops=${tops.join(', ')})`,
      ).toBeLessThanOrEqual(1);

      // And the labels (the visible "Sort by" / "Category" captions) must
      // share a Y baseline too — else they visually wobble above the
      // inputs.
      const labelBoxes = await Promise.all([
        page.locator('label[for="sort-select"]').boundingBox(),
        page.locator('label[for="category-filter"]').boundingBox(),
      ]);
      const labelTops = labelBoxes.map((b) => {
        expect(b, 'a toolbar label had no bounding box').not.toBeNull();
        return b!.y;
      });
      expect(
        Math.max(...labelTops) - Math.min(...labelTops),
        `Toolbar labels disagree on Y top by ${Math.max(...labelTops) - Math.min(...labelTops)}px`,
      ).toBeLessThanOrEqual(1);
    },
  );

  // ---------------------------------------------------------------
  // 4. sticky-TOC-layering
  // ---------------------------------------------------------------
  test.fixme(
    `sticky-TOC-layering: after scrolling, TOC stacks above tiles + below site header, no tile is partially occluded at rest (${FIXME_TAG})`,
    async ({ page }) => {
      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      // Scroll the #app_launcher section into view so the sticky TOC pins.
      await page.locator('#app_launcher').scrollIntoViewIfNeeded();
      // Scroll a bit further to make sure the TOC is definitely pinned.
      await page.evaluate(() => window.scrollBy(0, 600));
      await page.waitForTimeout(150); // allow sticky repaint

      // Site header z-index (computed) must be > apps-categories-nav z-index > tile z-index.
      const stack = await page.evaluate(() => {
        const header = document.querySelector('header, .site-header, .masthead');
        const toc = document.querySelector('.apps-categories-nav');
        const firstTile = document.querySelector('ul.tiles.tile-links > li');
        const readZ = (el: Element | null) => {
          if (!el) return null;
          const z = window.getComputedStyle(el).zIndex;
          return z === 'auto' ? 0 : parseInt(z, 10);
        };
        return {
          headerZ: readZ(header),
          tocZ: readZ(toc),
          tileZ: readZ(firstTile),
          tocPosition: toc ? window.getComputedStyle(toc).position : null,
        };
      });

      expect(stack.tocPosition, 'TOC should use position: sticky').toBe('sticky');
      expect(stack.tocZ, 'TOC should define a z-index').not.toBeNull();
      expect(stack.headerZ, 'site header should define a z-index').not.toBeNull();
      expect(
        (stack.headerZ ?? 0) > (stack.tocZ ?? 0),
        `Site header z-index (${stack.headerZ}) must exceed TOC z-index (${stack.tocZ}).`,
      ).toBeTruthy();
      expect(
        (stack.tocZ ?? 0) >= (stack.tileZ ?? 0),
        `TOC z-index (${stack.tocZ}) must be >= first tile z-index (${stack.tileZ}).`,
      ).toBeTruthy();

      // At rest (no scroll in flight) no tile should be partially covered
      // by the TOC. Find the first tile currently visible in the
      // viewport (top >= 0) and assert its top edge lies at or below
      // the TOC's bottom edge. Using the first DOM tile would fail
      // spuriously after the scroll above pushed it above the
      // viewport.
      const { firstVisibleTileTop, tocBottom, viewportHeight } = await page.evaluate(() => {
        const tocRect = document.querySelector('.apps-categories-nav')!.getBoundingClientRect();
        const tiles = document.querySelectorAll('ul.tiles.tile-links > li');
        let firstVisibleTop: number | null = null;
        for (const tile of Array.from(tiles)) {
          const rect = (tile as HTMLElement).getBoundingClientRect();
          // Visible = any portion of the tile overlaps the viewport.
          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            firstVisibleTop = rect.top;
            break;
          }
        }
        return {
          firstVisibleTileTop: firstVisibleTop,
          tocBottom: tocRect.bottom,
          viewportHeight: window.innerHeight,
        };
      });
      expect(
        firstVisibleTileTop,
        `No tile is currently in the viewport after scroll (viewportHeight=${viewportHeight})`,
      ).not.toBeNull();
      expect(
        (firstVisibleTileTop ?? 0) + 0.5 >= tocBottom,
        `First visible tile top (${firstVisibleTileTop}) sits above the TOC bottom (${tocBottom}) — occluded.`,
      ).toBeTruthy();
    },
  );

  // ---------------------------------------------------------------
  // 5. reduced-motion
  // ---------------------------------------------------------------
  test.fixme(
    `reduced-motion: with reduced-motion emulated, no element on /apps has transition-duration > 0.01s or a hover transform (${FIXME_TAG})`,
    async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      const violators = await page.evaluate(() => {
        const parseLongestDuration = (value: string): number => {
          // CSS time: either "0s" or a comma-separated list like "0.2s, 0s, 300ms".
          if (!value) return 0;
          const parts = value.split(',').map((p) => p.trim());
          let longest = 0;
          for (const part of parts) {
            const match = part.match(/^([\d.]+)(s|ms)$/);
            if (!match) continue;
            const n = parseFloat(match[1]);
            const seconds = match[2] === 'ms' ? n / 1000 : n;
            if (seconds > longest) longest = seconds;
          }
          return longest;
        };

        const offenders: { selector: string; transitionDuration: string; reason: string }[] = [];
        const all = document.querySelectorAll('*');
        for (const el of Array.from(all)) {
          const cs = window.getComputedStyle(el);
          const longest = parseLongestDuration(cs.transitionDuration);
          if (longest > 0.01) {
            offenders.push({
              selector: `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}`,
              transitionDuration: cs.transitionDuration,
              reason: `transition-duration ${cs.transitionDuration} exceeds 0.01s under reduce`,
            });
          }
        }
        return offenders;
      });

      // Separately probe the hover state on tile anchors: with reduced
      // motion we also expect no visible transform on hover. We sample
      // the first tile anchor (representative of the lot) so the check
      // is deterministic and cheap.
      //
      // Note on identity-matrix false positives: CSS `transform:
      // translateY(0)` computes to `matrix(1, 0, 0, 1, 0, 0)` — an
      // identity transform that produces no visible motion. Reduced-
      // motion CSS often collapses animations down to the identity
      // matrix rather than removing the transform declaration
      // entirely. Treat the identity matrix as equivalent to `none`.
      const tileAnchors = page.locator('ul.tiles.tile-links > li > a');
      expect(
        await tileAnchors.count(),
        'no tile anchors found on /apps — selector `ul.tiles.tile-links > li > a` may be stale',
      ).toBeGreaterThan(0);
      const tileAnchor = tileAnchors.first();
      await tileAnchor.hover();
      const hoverTransform = await tileAnchor.evaluate(
        (el) => window.getComputedStyle(el).transform,
      );
      const IDENTITY_MATRICES = new Set([
        'none',
        'matrix(1, 0, 0, 1, 0, 0)',
        'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      ]);
      if (!IDENTITY_MATRICES.has(hoverTransform)) {
        violators.push({
          selector: 'ul.tiles.tile-links > li > a:hover',
          transitionDuration: 'n/a',
          reason: `hover transform is ${hoverTransform} (expected identity under reduce)`,
        });
      }

      expect(
        violators,
        `Elements animating under prefers-reduced-motion: reduce:\n${violators
          .map((v) => `  - ${v.selector}: ${v.reason}`)
          .join('\n')}`,
      ).toEqual([]);
    },
  );

  // ---------------------------------------------------------------
  // 6. dark-mode-contrast (gated on toggle existing)
  // ---------------------------------------------------------------
  test.fixme(
    `dark-mode-contrast: once the dark toggle lands, axe color-contrast passes at prefers-color-scheme: dark (${FIXME_TAG})`,
    async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto(APPS_PATH, { waitUntil: 'networkidle' });

      // Gate: only evaluate contrast once the palette tokens have landed.
      // The theme-designer ships a `[data-theme]` attribute on <html> or
      // <body> when their work is live. Until then, skip.
      const gated = await page.evaluate(() => {
        const html = document.documentElement;
        return html.hasAttribute('data-theme') || document.body.hasAttribute('data-theme');
      });
      test.skip(!gated, 'Dark mode toggle not yet shipped (no data-theme attribute present).');

      // Once gated, run axe-core scoped to the color-contrast rule.
      const { AxeBuilder } = await import('@axe-core/playwright');
      const results = await new AxeBuilder({ page })
        .withRules(['color-contrast'])
        .analyze();

      expect(
        results.violations,
        `Dark-mode color-contrast violations:\n${results.violations
          .flatMap((v) =>
            v.nodes.map((n) => `  - ${v.id} on ${n.target.join(' > ')}: ${n.failureSummary}`),
          )
          .join('\n')}`,
      ).toEqual([]);
    },
  );
});
