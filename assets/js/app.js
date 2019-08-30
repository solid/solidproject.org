/**
 * Accordion functionality here
 */
const accordion = (function() {
  let instance;

  function init() {
    function addClass(element) {
      if (element.className.includes('open')) {
        return (element.className = element.className.replace(/open/g, ''));
      }

      return (element.className = element.className + ' open');
    }

    function toggle(className) {
      var el = document.getElementsByClassName(className);
      for (var i = 0; i < el.length; i++) {
        // Here we have the same onclick
        el.item(i).onclick = addClass.bind(this, el.item(i).parentNode);
      }
    }

    return {
      // Public methods and variables
      toggleInit: function(className) {
        toggle(className);
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

(function() {
  // Create instance to add accordion to footer mobile
  const footerAccordion = accordion.getInstance();
  footerAccordion.toggleInit('accordionItem');

  /** Open side nav menu by default on blog and documentation */
  if (document.getElementsByClassName('active').length > 0 ) {
    var element = document.getElementsByClassName('active')[0].parentNode;
    var parentLi = element.parentNode;
    parentLi.className = 'open';
  }
  const postButtonmenu = document.getElementsByClassName('menu-mobile-aside')[0];
  postButtonmenu.addEventListener('click', () => {
    if (postButtonmenu.className.includes('open')) {
      postButtonmenu.className = 'menu-mobile-aside col-xs-2';
    } else {
      postButtonmenu.className = 'open menu-mobile-aside col-xs-2';
    }
    const element = document.getElementsByClassName('aside-menu')[0];

    if (element.className.includes('open')) {
      element.className = 'aside-menu';
    } else {
      element.className = 'aside-menu open';
    }
  });
})('docReady', window, accordion);

const hamburgerFunction = (() => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  if (!burger || !menu) return;
  const subMenus = document.querySelectorAll('.sub-links');
  burger.addEventListener('click', () => {
    burger.classList.toggle('toggle-burger');
    menu.classList.toggle('menu-active');
  });

  subMenus.forEach(subMenu => {
    const siblings = [...subMenu.parentElement.children].filter(
      child => child !== subMenu
    );
    subMenu.addEventListener('click', () => {
      siblings.forEach(sibling => sibling.classList.remove('active'));
      subMenu.classList.toggle('active');
    });
  });
})();
