document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.main-nav');
  const navLinks = Array.from(nav.querySelectorAll('a'));

  function isOpen() {
    return nav.classList.contains('nav-open');
  }

  function openMenu() {
    nav.classList.add('nav-open');
    hamburgerButton.classList.add('active');
    hamburgerButton.setAttribute('aria-expanded', 'true');
    navLinks[0].focus();
  }

  function closeMenu(returnFocus) {
    nav.classList.remove('nav-open');
    hamburgerButton.classList.remove('active');
    hamburgerButton.setAttribute('aria-expanded', 'false');
    if (returnFocus) {
      hamburgerButton.focus();
    }
  }

  hamburgerButton.addEventListener('click', function() {
    if (isOpen()) {
      closeMenu(true);
    } else {
      openMenu();
    }
  });

  /* Trap focus within menu while it is open, and close on Escape. */
  document.addEventListener('keydown', function(event) {
    if (!isOpen()) return;

    if (event.key === 'Escape') {
      closeMenu(true);
      return;
    }

    if (event.key === 'Tab') {
      const focusable = [...navLinks, hamburgerButton];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* Following a nav link navigates away; close the menu to reset state. */
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
     closeMenu(false);
    });
  });

  /* Handle viewport resize to prevent unwanted menu transitions */
  let resizeTimeout;
  window.addEventListener('resize', function() {
    /* Add resizing class to disable transitions */
    nav.classList.add('resizing');

    /* Reset the menu if resized up to desktop while open */
    if (window.matchMedia('(min-width: 1025px)').matches && isOpen()) {
      closeMenu(false);
    }

    /* Clear existing timeout */
    clearTimeout(resizeTimeout);

    /* Remove resizing class after resize is complete */
    resizeTimeout = setTimeout(function() {
      nav.classList.remove('resizing');
    }, 100);
  });
});
