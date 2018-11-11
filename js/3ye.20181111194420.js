(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-137').attr('src', (dpi>1) ? 'images/group-5-1402.jpg' : 'images/group-5-701.jpg');
$('.js-138').attr('src', (dpi>1) ? 'images/group-400.png' : 'images/group-200.png');
$('.js-139').attr('src', (dpi>1) ? 'images/bertellifotografia-dress-female-573267-1262.jpg' : 'images/bertellifotografia-dress-female-573267-631.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/group-4-342.png' : 'images/group-4-171.png');
$('.js-141').attr('src', (dpi>1) ? 'images/group-4-342.png' : 'images/group-4-171.png');
$('.js-142').attr('src', (dpi>1) ? 'images/group-4-342.png' : 'images/group-4-171.png');
$('.js-143').attr('src', (dpi>1) ? 'images/group-2-276.png' : 'images/group-2-138.png');
$('.js-144').attr('src', (dpi>1) ? 'images/group-3-288.png' : 'images/group-3-144.png');
$('.js-145').attr('src', (dpi>1) ? 'images/group-5-copy-2-1896.png' : 'images/group-5-copy-2-948.png');
$('.js-146').attr('src', (dpi>1) ? 'images/group-28-1070.png' : 'images/group-28-535.png');
$('.js-147').attr('src', (dpi>1) ? 'images/group-29-72.png' : 'images/group-29-36.png');
$('.js-148').attr('src', (dpi>1) ? 'images/group-30-74.png' : 'images/group-30-37.png');}else{$('.js-137').attr('src', (dpi>1) ? 'images/group-5-488.jpg' : 'images/group-5-244.jpg');
$('.js-138').attr('src', (dpi>1) ? 'images/group-242.png' : 'images/group-121.png');
$('.js-139').attr('src', (dpi>1) ? 'images/bertellifotografia-dress-female-573267-442.jpg' : 'images/bertellifotografia-dress-female-573267-221.jpg');
$('.js-140').attr('src', (dpi>1) ? 'images/group-4-268.png' : 'images/group-4-134.png');
$('.js-141').attr('src', (dpi>1) ? 'images/group-4-268.png' : 'images/group-4-134.png');
$('.js-142').attr('src', (dpi>1) ? 'images/group-4-266.png' : 'images/group-4-133.png');
$('.js-143').attr('src', (dpi>1) ? 'images/group-2-118.png' : 'images/group-2-59.png');
$('.js-144').attr('src', (dpi>1) ? 'images/group-3-142.png' : 'images/group-3-71.png');
$('.js-145').attr('src', (dpi>1) ? 'images/group-5-copy-2-640.png' : 'images/group-5-copy-2-320.png');
$('.js-146').attr('src', (dpi>1) ? 'images/group-28-358.png' : 'images/group-28-179.png');
$('.js-147').attr('src', (dpi>1) ? 'images/group-29-24-1.png' : 'images/group-29-12-1.png');
$('.js-148').attr('src', (dpi>1) ? 'images/group-30-24-1.png' : 'images/group-30-12-1.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}

});