// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import Cookie from 'jquery.cookie';
import AOS from 'aos';
import Swiper from 'swiper';


// 2. Foundation
// ----------
  
Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
  
$(document).foundation();


// 4. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

// 4. Announcement
// --------------------

/*
$(function() {
  if($.cookie('showed_modal') !== "true") {

  $("#announcement").foundation("open");

  $('#announcement a').on('click', function() {
    $('#announcement').foundation("close");
  });

  $.cookie('showed_modal', 'true', { expires: 365 }); 
  }
});
*/

$(function() {
  if($.cookie('showedModal') !== "true") {


    if ( $( "#announcementOffCanvas" ).length ) {
      $("#announcementOffCanvas").foundation("open");
      $('#announcementOffCanvas a').on('click', function() {
        $('#announcementOffCanvas').foundation("close");
      });
    }

    $.cookie('showedModal', 'true'); 
  }
});


// 5. Carousel
// -----------

$(document).ready(function () {

    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      preventClicks: true,
      slideToClickedSlide: false,

  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

    navigation: {
      nextEl: '.swiper-button-next-test',
      prevEl: '.swiper-button-prev-test',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

   
    })
  });