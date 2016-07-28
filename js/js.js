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
          $(".h-menu").addClass("dark-banner-text");
        
    }else if(st < banner_height) {
           
$("header").removeClass('fixed').removeClass('header-up');

         //$("header").css({ position: 'static', top: '0px' });
    }

    
    lastScrollTop = st;
}







