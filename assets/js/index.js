$(document).ready(function () {
  ///// SCROLLSPY SMOOTH SCROLL /////
  $('#myNavbar a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();

      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $('[data-toggle="tooltip"]').tooltip(); 

});