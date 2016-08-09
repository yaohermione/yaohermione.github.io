var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var content = document.getElementById("content");
var header = document.querySelector("header");
var drawer = document.querySelector("nav");
var body = document.querySelector("body");
var gray = document.getElementById("main-gray-layer");


$( document ).ready(function() {

    if ($("#menu_icon").css("display") == "none" ){
        
        $( "#banner_img" ).attr("src","img/isabella-gray-narrow.jpg");
    }
    else{
        $( "#banner_img" ).attr("src","img/isabella-gray.jpg");
    }
    //$("#banner").height($("#banner_img").height());

});


var position;
$("#menu_icon").click(function(e){
    position = $(window).scrollTop(); 
    menu_icon.classList.toggle('open');
    content.classList.toggle('left');
    header.classList.toggle('left');
    drawer.classList.toggle('left');
   
    gray.classList.toggle('left');
    document.getElementById("main-gray-layer").style.height='100%'; 

    $(window).on('scroll',scrollHandler);

    e.stopPropagation();
});

var scrollHandler = function(){
    $(window).scrollTop(position);
    
}


$("#main-gray-layer").click(function(e){

   
    drawer.classList.toggle('left');
    menu_icon.classList.toggle('open');
    content.classList.toggle('left');
    header.classList.toggle('left');
  
    gray.classList.toggle('left');
    document.getElementById("main-gray-layer").style.height='0%';
    //$('body').css('overflow', 'auto');
    //$('body').css('overflow', ''); 
    $(window).off("scroll", scrollHandler);//移除
   //$('body')[0].classList.toggle('overflowhidden');
   //$("body").toggleClass('overflowhidden');
        e.stopPropagation();
});



content.addEventListener('click',
function(e){
	//alert("press cotent!");
	//drawer.classList.remove('open');
	//main.classList.remove('left');
	menu_icon.classList.remove('open');
	content.classList.remove('left');
	header.classList.remove('left');
	drawer.classList.remove('left');
	e.stopPropagation();
});

//var header_h = $( "header" ).height();

//console.log("header+banner"+header_h);
//$("#banner").css('margin-top', $( "header" ).height() + "px");

$("#test").click(function() {
  header.classList.toggle('header-up');
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var banner_height = $( "#banner" ).height();
//console.log("banner height: "+banner_height);
//var banner_height = $('banner').outerHeight();

//console.log("header height is: "+header_height);


$(window).scroll(function(event){
    didScroll = true;
//console.log("did scroll is : "+didScroll);


});

//console.log("didScroll is: "+didScroll);
//console.log("hihihihi");

setInterval(function() {
//console.log("250ms past");

    if (didScroll) {
    	//console.log("didScroll");
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > banner_height){
        //console.log("down");
         //$("header").css({ position: 'fixed', top: '0px' });
         
       $("header").addClass('header-up');


        
//st + $(window).height() < $(document).height()

    } else if(st < lastScrollTop && st > banner_height) {
            $("header").addClass('fixed').removeClass('header-up');
          $(".horizontal").addClass("dark-banner-text");
        
    }else if(st < banner_height) {
        //console.log("this is st: "+st);
        //console.log("this is banner_height: "+banner_height);
           
$("header").removeClass('fixed').removeClass('header-up');
$(".horizontal").removeClass("dark-banner-text");
         //$("header").css({ position: 'static', top: '0px' });
    }

    
    lastScrollTop = st;
}
//parellel scroll
var banner = document.getElementById('banner');

if ($("#menu_icon").css("display") == "none" ){
addEvent(window,'scroll',parallel_scroll);
parallel_scroll();
}
else{

};

function parallel_scroll(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    banner.style.top = scrollTop*.3+'px';
}

function addEvent(eventTarget, eventType, eventHandler) {
        if (eventTarget.addEventListener) {
            eventTarget.addEventListener(eventType, eventHandler, false);
        } else {
            if (eventTarget.attachEvent) {
                eventType = "on" + eventType;
                eventTarget.attachEvent(eventType, eventHandler);
            } else {
                eventTarget["on" + eventType] = eventHandler;
            }
        }
    }


jQuery(function($) {
  'use strict';

  // -------------------------------------------------------------
  //   Basic Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 3,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      forward: $wrap.find('.forward'),
      backward: $wrap.find('.backward'),
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next'),
      prevPage: $wrap.find('.prevPage'),
      nextPage: $wrap.find('.nextPage')
    });

    // To Start button
    $wrap.find('.toStart').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the start of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toStart', item);
    });

    // To Center button
    $wrap.find('.toCenter').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the center of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toCenter', item);
    });

    // To End button
    $wrap.find('.toEnd').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the end of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toEnd', item);
    });

    // Add item
    $wrap.find('.add').on('click', function() {
      $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
    });

    // Remove item
    $wrap.find('.remove').on('click', function() {
      $frame.sly('remove', -1);
    });
  }());

  // -------------------------------------------------------------
  //   Centered Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#centered');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'centered',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 4,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next')
    });
  }());

  // -------------------------------------------------------------
  //   Force Centered Navigation
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#forcecentered');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next')
    });
  }());

  // -------------------------------------------------------------
  //   Cycle By Items
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#cycleitems');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 1000,
      pauseOnHover: 1,

      // Buttons
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next')
    });

    // Pause button
    $wrap.find('.pause').on('click', function() {
      $frame.sly('pause');
    });

    // Resume button
    $wrap.find('.resume').on('click', function() {
      $frame.sly('resume');
    });

    // Toggle button
    $wrap.find('.toggle').on('click', function() {
      $frame.sly('toggle');
    });
  }());

  // -------------------------------------------------------------
  //   Cycle By Pages
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#cyclepages');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'pages',
      cycleInterval: 1000,
      pauseOnHover: 1,
      startPaused: 1,

      // Buttons
      prevPage: $wrap.find('.prevPage'),
      nextPage: $wrap.find('.nextPage')
    });

    // Pause button
    $wrap.find('.pause').on('click', function() {
      $frame.sly('pause');
    });

    // Resume button
    $wrap.find('.resume').on('click', function() {
      $frame.sly('resume');
    });

    // Toggle button
    $wrap.find('.toggle').on('click', function() {
      $frame.sly('toggle');
    });
  }());

  // -------------------------------------------------------------
  //   One Item Per Frame
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#oneperframe');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next')
    });
  }());

  // -------------------------------------------------------------
  //   Crazy
  // -------------------------------------------------------------
  (function() {
    var $frame = $('#crazy');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 3,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click',
      speed: 300,
      elasticBounds: 1,
      easing: 'easeOutExpo',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Buttons
      forward: $wrap.find('.forward'),
      backward: $wrap.find('.backward'),
      prev: $wrap.find('.prev'),
      next: $wrap.find('.next'),
      prevPage: $wrap.find('.prevPage'),
      nextPage: $wrap.find('.nextPage')
    });

    // To Start button
    $wrap.find('.toStart').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the start of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toStart', item);
    });

    // To Center button
    $wrap.find('.toCenter').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the center of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toCenter', item);
    });

    // To End button
    $wrap.find('.toEnd').on('click', function() {
      var item = $(this).data('item');
      // Animate a particular item to the end of the frame.
      // If no item is provided, the whole content will be animated.
      $frame.sly('toEnd', item);
    });

    // Add item
    $wrap.find('.add').on('click', function() {
      $frame.sly('add', '<li>' + $slidee.children().length + '</li>');
    });

    // Remove item
    $wrap.find('.remove').on('click', function() {
      $frame.sly('remove', -1);
    });
  }());
});

