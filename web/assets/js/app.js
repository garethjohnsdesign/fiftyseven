// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import "lightGallery";
import "lg-fullscreen";
import "lg-video";
import "lg-autoplay";
import AOS from 'aos';
import Swiper from 'swiper';
import Cookies from 'js-cookie'


// 2. Foundation
// ----------
  
Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
  
$(document).foundation();


// 3. Loading
// ----------



$(document).ready(function() {
  if (!Cookies.get('loading')) {


$(function() {


$(".loader").removeClass("hide");

var singleNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var tenPlus = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var tens = ['twenty', 'thirty', 'forty', 'fifty'];

function num2word(str) {
    str = str.toString().replace(/[\, ]/g, '');

    if (str != parseFloat(str)) {
        return 'not a number';
    }

    var strLength = str.indexOf('.');
    if (strLength == -1) {
        strLength = str.length;
    }

    var n = str.split('');
    var result = '';
    var skip = 0;
    for (var i = 0; i < strLength; i++) {

        if ((strLength - i) % 3 == 2) {
            if (n[i] == '1') {
                result += tenPlus[Number(n[i + 1])] + ' ';
                i++;
                skip = 1;
            } else if (n[i] != 0) {
                result += tens[n[i] - 2] + ' ';
                skip = 1;
            }
        } else if (n[i] != 0) {
            result += singleNumber[n[i]] + ' ';
        }
    }

    return result.replace(/\s+/g, ' ');
}

/* 
Selectors 
*/
var hour = document.getElementsByClassName('hour'),
    min = document.getElementsByClassName('min'),
    sec = document.getElementsByClassName('sec');
//     ampm = document.getElementsByClassName('ampm');

var firstTime = true;

/*
Updated the clock 
*/
function updateClock(d) {
  var hours = ((d.getHours() + 11) % 12 + 1),
      minutes = d.getMinutes(),
      seconds = d.getSeconds();
//       period = (d.getHours() < 12) ? "am" : "pm";
  
  console.log(hours);
   
  hour[0].innerHTML = num2word(hours);
  min[0].innerHTML = num2word(minutes) + '&';
  sec[0].innerHTML = num2word(seconds) + 'seconds';
//   ampm[0].innerHTML = period;
  
}

/*
Run updateClock every second 
*/
setInterval(function() {
  var d = new Date();
  updateClock(d);
}, 1000);


    $(".loader").addClass("loading");

    setTimeout(function(){
     $(".loader").addClass("loaded");
     Cookies.set('loading', 'true');
    }, 5000); 

});

  }
});




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


// 5. Carousel
// -----------

$(document).ready(function () {

    var firstSlide = Math.floor(Math.random() * 5);
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: firstSlide,
      loop: true,
      preventClicks: true,
      slideToClickedSlide: false,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

    navigation: {
      nextEl: '.swiper-button-next-test',
      prevEl: '.swiper-button-prev-test',
    }

   
    })
  });

// 6. Lightgallery
// ---------------

$('.video').lightGallery({
    counter: false,
    videoMaxWidth: '1080px',
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
    },
    vimeoPlayerParams: {
        autoplay: 0,
        title : 0,
        byline : 0,
        portrait : 0,
        color : 'FFFFFF'     
    }
});