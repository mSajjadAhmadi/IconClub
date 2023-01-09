// Selector ////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', event => {
   const mainNav = document.body.querySelector('#mainNav');
   if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
         target: '#mainNav',
      });
   };
});
// Header Fixed ////////////////////////////////////////////////////////////////
$(function() {
   var header = $("header");

   $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
         header.addClass("scrolled");
      } else {
         header.removeClass("scrolled");
      }
   });

});
// Carousel ////////////////////////////////////////////////////////////////////
$('#categories').owlCarousel({
   loop:false,
   rtl:true,
   margin:20,
   nav:true,
   dots: false,
   responsive:{
      0:{
         items:1
      },
      600:{
         items:2
      },
      1000:{
         items:3
      }
   }
})