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
     aria-pressed in sync, and persist the choice. Clicking flips
     between "light" and "dark"; user choice wins over system
     preference from that point on. */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const syncPressed = () => {
      const current = document.documentElement.getAttribute('data-theme');
      themeToggle.setAttribute('aria-pressed', current === 'dark' ? 'true' : 'false');
    };
    syncPressed();

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
      syncPressed();
    });
  }
});
