$(document).ready(function(){
  media();
  //전역 스코프
  function media(){
    var windowWidth = $(window).width();
    if(windowWidth >= 950){
      //swiper
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        // effect: "fade",
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        //   },        
          navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    }else{

    }
  }

  $('#hamburger').click(function(){
    $('#hamburger').toggleClass('active');
    $('nav, nav ul').toggleClass('active');
});


});