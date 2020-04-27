$(document).ready(function() {
  var scroll, scale;
  var wheight = $('#about').offset().top - 5;
  $(window).scroll(function(){
    scroll = $(this).scrollTop();
    if (scroll > wheight) {
      $('nav#nav-muncul').css({
        "transform":"translateY(0)",
        "opacity"  : "1"
      });
    }else{
      $('nav#nav-muncul').css({
        "transform":"translateY(-110%)",
        "opacity"  : "0"
      });
    }
  })
  var navInti = $('#nav-inti').html();
  $('#nav-muncul').html(navInti);

  $(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
  });
  $(".button-collapse").sideNav();
});

function toTop(){
  $('body,html').animate({
    scrollTop: 0
  }, 1000);
}
function toScroll(int, waktu){
  $('body,html').animate({
    scrollTop: int
  }, waktu);
}
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00c853"
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00c853",
      "opacity": 0.4,
      "width": 1
    },
    "size": {
      "value": 5
    }
  }
});
wow = new WOW({
  boxClass     : 'wow',
  animateClass : 'animated',
  offset       : 100
});
wow.init();