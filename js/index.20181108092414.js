(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/group-4-142.png' : 'images/group-4-71.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-3-262.png' : 'images/group-3-131.png');
$('.js-3').attr('src', (dpi>1) ? 'images/group-10-958.png' : 'images/group-10-479.png');
var a='data-src'; if($('.js-4 .slide0').hasAttr('src')) { a='src'; } $('.js-4 .slide0').attr(a, (dpi>1) ? 'images/beautiful-beauty-face-573301-1032.jpg' : 'images/beautiful-beauty-face-573301-516-1.jpg');
var a='data-src'; if($('.js-4 .slide1').hasAttr('src')) { a='src'; } $('.js-4 .slide1').attr(a, (dpi>1) ? 'images/beautiful-blond-blonde-1071162-1032.jpg' : 'images/beautiful-blond-blonde-1071162-516-1.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/group-11-58.png' : 'images/group-11-29.png');
$('.js-6').attr('src', (dpi>1) ? 'images/group-12-58.png' : 'images/group-12-29.png');
$('.js-7').attr('src', (dpi>1) ? 'images/group-13-606.png' : 'images/group-13-303.png');
$('.js-8').attr('src', (dpi>1) ? 'images/group-15-308.png' : 'images/group-15-154-1.png');
$('.js-9').attr('src', (dpi>1) ? 'images/group-18-432.png' : 'images/group-18-216-1.png');
$('.js-10').attr('src', (dpi>1) ? 'images/group-17-378.png' : 'images/group-17-189.png');
$('.js-11').attr('src', (dpi>1) ? 'images/group-19-368.png' : 'images/group-19-184.png');
$('.js-12').attr('src', (dpi>1) ? 'images/group-16-954.png' : 'images/group-16-477.png');
$('.js-13').attr('src', (dpi>1) ? 'images/group-32-1638.png' : 'images/group-32-819.png');
$('.js-14').attr('src', (dpi>1) ? 'images/group-22-164.png' : 'images/group-22-82-1.png');
$('.js-15').attr('src', (dpi>1) ? 'images/group-20-310.png' : 'images/group-20-155.png');
$('.js-16').attr('src', (dpi>1) ? 'images/group-25-414.jpg' : 'images/group-25-207.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/group-21-1052.png' : 'images/group-21-526.png');
$('.js-18').attr('src', (dpi>1) ? 'images/group-26-454.jpg' : 'images/group-26-227.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/group-24-556.png' : 'images/group-24-278-1.png');
$('.js-20').attr('src', (dpi>1) ? 'images/group-28-986.png' : 'images/group-28-493.png');
$('.js-21').attr('src', (dpi>1) ? 'images/group-30-56.png' : 'images/group-30-28-1.png');
$('.js-22').attr('src', (dpi>1) ? 'images/group-29-56.png' : 'images/group-29-28-1.png');}else{$('.js').attr('src', (dpi>1) ? 'images/group-4-72.png' : 'images/group-4-36.png');
$('.js-2').attr('src', (dpi>1) ? 'images/group-3-132.png' : 'images/group-3-66.png');
$('.js-3').attr('src', (dpi>1) ? 'images/group-10-480.png' : 'images/group-10-240.png');
var a='data-src'; if($('.js-4 .slide0').hasAttr('src')) { a='src'; } $('.js-4 .slide0').attr(a, (dpi>1) ? 'images/beautiful-beauty-face-573301-516.jpg' : 'images/beautiful-beauty-face-573301-258.jpg');
var a='data-src'; if($('.js-4 .slide1').hasAttr('src')) { a='src'; } $('.js-4 .slide1').attr(a, (dpi>1) ? 'images/beautiful-blond-blonde-1071162-516.jpg' : 'images/beautiful-blond-blonde-1071162-258.jpg');
$('.js-5').attr('src', (dpi>1) ? 'images/group-11-28.png' : 'images/group-11-14.png');
$('.js-6').attr('src', (dpi>1) ? 'images/group-12-30.png' : 'images/group-12-15.png');
$('.js-7').attr('src', (dpi>1) ? 'images/group-13-304.png' : 'images/group-13-152.png');
$('.js-8').attr('src', (dpi>1) ? 'images/group-15-154.png' : 'images/group-15-77.png');
$('.js-9').attr('src', (dpi>1) ? 'images/group-18-216.png' : 'images/group-18-108.png');
$('.js-10').attr('src', (dpi>1) ? 'images/group-17-188.png' : 'images/group-17-94.png');
$('.js-11').attr('src', (dpi>1) ? 'images/group-19-180.png' : 'images/group-19-90.png');
$('.js-12').attr('src', (dpi>1) ? 'images/group-16-476.png' : 'images/group-16-238.png');
$('.js-13').attr('src', (dpi>1) ? 'images/group-32-820.png' : 'images/group-32-410.png');
$('.js-14').attr('src', (dpi>1) ? 'images/group-22-82.png' : 'images/group-22-41.png');
$('.js-15').attr('src', (dpi>1) ? 'images/group-20-154.png' : 'images/group-20-77.png');
$('.js-16').attr('src', (dpi>1) ? 'images/group-25-206.jpg' : 'images/group-25-103.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/group-21-526.png' : 'images/group-21-263.png');
$('.js-18').attr('src', (dpi>1) ? 'images/group-26-226.jpg' : 'images/group-26-113.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/group-24-278.png' : 'images/group-24-139.png');
$('.js-20').attr('src', (dpi>1) ? 'images/group-28-492.png' : 'images/group-28-246.png');
$('.js-21').attr('src', (dpi>1) ? 'images/group-30-28.png' : 'images/group-30-14.png');
$('.js-22').attr('src', (dpi>1) ? 'images/group-29-28.png' : 'images/group-29-14.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-4 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,speed: 300,dots: false,arrows: false,infinite: true});
});