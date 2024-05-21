// An object literal
var app = {
  init: function() {
    console.log('🟢 Rockville Baptist Church ⛪');
  },
  mobileNav: function(){
    var openNav = document.querySelector('.navbar-toggler');
    var closeNav = document.querySelector('.mob-menu-close');
    var mobileMenuContainer = document.querySelector('.mobile-menu-container');

    openNav.addEventListener('click', function(){
      mobileMenuContainer.classList.add('show');
    });
    closeNav.addEventListener('click', function(){
      mobileMenuContainer.classList.remove('show');
    });
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  app.init();
  app.mobileNav();
})();
