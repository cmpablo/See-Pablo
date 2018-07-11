$(document).ready(function () {
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

  function copyEmailText() {
    let copyText = document.getElementById('email-addy');
    copyText.select();
    document.execCommand('copy');
    //console.log('copied text: ' + copyText.value)
  }
});