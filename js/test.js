var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var content = document.getElementById("content");
var header = document.querySelector("header");
var drawer = document.querySelector("nav");
var body = document.querySelector("body");
var gray = document.getElementById("main-gray-layer");


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







// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var banner_height = $( "#banner" ).height();

$(window).scroll(function(event){
    didScroll = true;

});



setInterval(function() {


    if (didScroll) {
    	
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




function gotome(){
    window.location.href = "https://yaohermione.github.io/#me";
}




