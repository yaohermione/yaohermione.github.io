var main = document.querySelector("main");
//var menu_icon = document.getElementsByClassName("menu_icon");
var content = document.getElementById("content");
var header = document.querySelector("header");
var drawer = document.querySelector("nav");

//for (var i=0;i<menu_icon.length;i++){
        $(".menu_icon").click(function(e){
        		
        	//alert("pressed hamburger");
        drawer.classList.toggle('left');
        	
        $(".menu_icon").toggle('open');
        content.classList.toggle('left');
        header.classList.toggle('left');
        	e.stopPropagation();
        })
//}
content.addEventListener('click',
function(e){
	//alert("press cotent!");
	//drawer.classList.remove('open');
	//main.classList.remove('left');
	$(".menu_icon").removeClass('open');
	content.classList.remove('left');
	header.classList.remove('left');
	drawer.classList.remove('left');
	e.stopPropagation();
})

//var header_h = $( "header" ).height()+$( "#banner" ).height();
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
   if (st > lastScrollTop){
        //console.log("down");
        $("header").removeClass('header-hidden');
        $("header").addClass('header-up');
//st + $(window).height() < $(document).height() && 

    } else if(st < lastScrollTop &&  st > banner_height ) {
                   $("header").removeClass('header-hidden');
                    $("header").removeClass('header-up');

                    }
    else if(st < banner_height ) {
                   $("header").removeClass('header-hidden');
                $("header").addClass('header-up');  
                    }

    
    
    lastScrollTop = st;
}














