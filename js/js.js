var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var content = document.getElementById("content");
var header = document.querySelector("header");
var drawer = document.querySelector("nav");


menu_icon.addEventListener('click',
function(e){
		
	//alert("pressed hamburger");
drawer.classList.toggle('left');
	
menu_icon.classList.toggle('open');
content.classList.toggle('left');
header.classList.toggle('left');
	e.stopPropagation();
})

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
})

var header_h = $( "header" ).height();
//$("#banner").css('margin-top', $( "header" ).height() + "px");

$("#test").click(function() {
  header.classList.toggle('header-up');
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var header_height = $('header').outerHeight();

console.log("header height is: "+header_height);


$(window).scroll(function(event){
    didScroll = true;
console.log("did scroll is : "+didScroll);


});

//console.log("didScroll is: "+didScroll);
console.log("hihihihi");

setInterval(function() {
//console.log("250ms past");

    if (didScroll) {
    	console.log("didScroll");
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
    if (st > lastScrollTop && st > header_height){
        console.log("down");
        $("header").addClass('header-up');
    } else {
        console.log("up");
        if(st + $(window).height() < $(document).height()) {
            $("header").removeClass('header-up');
        }
    }
    
    lastScrollTop = st;
}














