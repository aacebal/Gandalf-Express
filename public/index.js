var background = true;

$('document').ready(function(){

$('html').on('click', function(){
  setTimeout(function () {
    if (background) {
      $('body').css({'backgroundImage': 'url(../images/gandalf-home.jpg)'});
      $('.container').removeClass('col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-xl-offset-6');
      background = false;
    }
    else {
      $('body').css({'backgroundImage': 'url(../images/gandalf_2.jpg)'});
      $('.container').addClass('col-sm-offset-6 col-md-offset-6 col-lg-offset-6 col-xl-offset-6');
      background = true;
    }
  }, 10);


});

});
