var background = true;

$('document').ready(function(){

$('html').on('click', function(){


  if (background) {
    $('body').css({'backgroundImage': 'url(../images/gandalf-home.jpg)'});
    background = false;
  }
  else {
    $('body').css({'backgroundImage': 'url(../images/gandalf_2.jpg)'});
    background = true;
  }

});

});
