// An object literal
var app = {
  init: function() {
    console.log('🟢 Rockville Baptist Church ⛪');
  },
  includeHTML: function() {
    var z, i, element, file, xhttp;
    z = document.querySelectorAll("[data-includeHTML]");
    for (i = 0; i < z.length; i++) {
      element = z[i];
      file = element.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            element.removeAttribute("w3-include-html");
            element.removeAttribute("data-includeHTML");
            app.includeHTML();

            if(i == z.length-1){
              app.menuActive();
            }
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
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
  },
  menuActive: function() {
    var headerMenu = document.querySelector('ul.navbar-nav');
    var footerMenu = document.querySelector('.footer-nav ul');
    var mobileMenu = document.querySelector('ul.mob-menu');
    var pagePath = document.location.pathname;

    headerMenu.querySelectorAll('li').forEach(function(item){
      if(item.querySelector('a').getAttribute('href') === pagePath){
        item.classList.add('selected');
      }
    });

    footerMenu.querySelectorAll('li').forEach(function(item){
      if(item.querySelector('a').getAttribute('href') === pagePath){
        item.classList.add('selected');
      }
    });

    mobileMenu.querySelectorAll('li').forEach(function(item){
      if(item.querySelector('a').getAttribute('href') === pagePath){
        item.classList.add('active');
      }
    });
  },
  gCalendar: function() {
    document.addEventListener('DOMContentLoaded', function() {
      var calendarEl = document.getElementById('gcalendar');
    
        var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: '############',
            googleCalendarApiKey: '#################', // googleCalendarApiKey
            headerToolbar: {
                start: 'prev,next today',
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay,listYear'
            },
            events: '######@gmail.com' // calendarId
        });
    
        calendar.render();

        console.log(calendar.googleCalendarApiKey);
    });
  }
};
(function() {
  app.init();
  app.includeHTML();
  app.mobileNav();

  if(document.getElementById('gcalendar')){
    app.gCalendar();
  }
})();
