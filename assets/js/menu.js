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
});
