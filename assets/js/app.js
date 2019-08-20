/**
 * Accordion functionality here
 */
const accordion = (function () {
    let instance;
   
    function init() {
   
      function privateMethod(){
          console.log( "I am private" );
      }
   
      const privateVariable = "Im also private";
   
      const privateRandomNumber = Math.random();
   
      return {
   
        // Public methods and variables
        publicMethod: function () {
          console.log( "The public can see me!" );
        },
   
        publicProperty: "I am also public",
   
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
})();

(function() {
   console.log('document ready');
   // Create instance to add accordion to footer mobile
   const footerAccordion = accordion.getInstance();
})("docReady", window, accordion);