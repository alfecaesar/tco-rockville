// An object literal
var app = {
  init: function() {
    console.log('🟢 Rockville Baptist Church ⛪');
  },
  scrollTop: function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};
(function() {
  app.init();
})();
