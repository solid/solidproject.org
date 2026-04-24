document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.main-nav');

  hamburgerButton.addEventListener('click', function() {
    nav.classList.toggle('nav-open');
    hamburgerButton.classList.toggle('active');
  });

  /* Close menu when clicking on a link */
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('nav-open');
      hamburgerButton.classList.remove('active');
    });
  });

  /* Dropdown triggers ("Learn more", "Get Involved"). Click-to-toggle
     behaviour: on desktop the submenu floats beneath the trigger; on
     mobile (inside the slide-out overlay) it expands as a nested
     indented list. Either way the button's aria-expanded tracks the
     submenu's visibility so assistive tech reports the state
     correctly, and the matching <ul id> becomes visible. */
  const triggers = document.querySelectorAll('.main-nav__trigger');
  const closeAllSubmenus = (except) => {
    triggers.forEach(t => {
      if (t === except) return;
      const id = t.getAttribute('aria-controls');
      const panel = id && document.getElementById(id);
      t.setAttribute('aria-expanded', 'false');
      if (panel) panel.hidden = true;
    });
  };
  triggers.forEach(trigger => {
    const id = trigger.getAttribute('aria-controls');
    const panel = id && document.getElementById(id);
    if (!panel) return;
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      closeAllSubmenus(trigger);
      trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
    });
    /* Clicking a link inside the submenu closes it (in addition to
       navigating) so the dropdown doesn't linger open after the page
       unloads. */
    panel.addEventListener('click', function(e) {
      if (e.target.closest('a')) {
        trigger.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      }
    });
  });
  /* Click outside any submenu / trigger closes all. */
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.main-nav__group')) closeAllSubmenus();
  });
  /* Escape key closes all. */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeAllSubmenus();
  });

  /* Handle viewport resize to prevent unwanted menu transitions */
  let resizeTimeout;
  window.addEventListener('resize', function() {
    /* Add resizing class to disable transitions */
    nav.classList.add('resizing');

    /* Clear existing timeout */
    clearTimeout(resizeTimeout);

    /* Remove resizing class after resize is complete */
    resizeTimeout = setTimeout(function() {
      nav.classList.remove('resizing');
    }, 100);
  });

  /* Theme toggle
     The no-flash <script> in <head> already set data-theme before CSS
     paint. Here we just wire the click handler, keep the button's
     aria-pressed + the browser-chrome theme-color meta in sync, and
     persist the choice. Clicking flips between "light" and "dark";
     user choice wins over system preference from that point on. */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const THEME_COLOR_LIGHT = '#7C4DFF';
    const THEME_COLOR_DARK = '#0a0c11';
    const themeColorMeta = document.getElementById('theme-color-meta');

    const syncChrome = () => {
      const current = document.documentElement.getAttribute('data-theme');
      const isDark = current === 'dark';
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      if (themeColorMeta) {
        themeColorMeta.setAttribute('content', isDark ? THEME_COLOR_DARK : THEME_COLOR_LIGHT);
      }
    };
    syncChrome();

    themeToggle.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('solid-theme', next);
      } catch (e) {
        /* Private mode / storage disabled — the attribute still holds
           for this page view. */
      }
      syncChrome();
    });
  }
});
