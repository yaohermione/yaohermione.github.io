var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var drawer = document.getElementById("drawer");


menu_icon.addEventListener('click',
function(e){
	//alert("hover");
	//drawer.classList.toggle('open');
	main.classList.toggle('left');
	menu_icon.toggleClass('open');

	e.stopPropagation();
})

main.addEventListener('click',
function(e){
	//alert("hover");
	//drawer.classList.remove('open');
	main.classList.remove('left');
	menu_icon.classList.remove('open');
	e.stopPropagation();
})




$(document).ready(function(){
	$('#menu_icon').click(function(){
		//
	});
});




var header_h = $( "header" ).height();
//console.log("header_h is "+header_h);
//$("#intro").css({ top: $( "header" ).height() });
$("#banner").css('margin-top', $( "header" ).height() + "px");
$("#banner").css('margin-top', 10%);

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


// on scroll, let the interval function know the user has scrolled
// if scroll, set didScroll to true
$(window).scroll(function(event){
  didScroll = true;
});


// run hasScrolled() and reset didScroll status
setInterval(function() {
  if (didScroll) {//if user scroll
    hasScrolled();//do this func
    didScroll = false;//this variable will be true only if user scroll
  }
}, 250);


function hasScrolled() {

		var st = $(this).scrollTop();
		//abs means jueduizhi
		//do nothing if only scroll a little delta
		if (Math.abs(lastScrollTop — st) <= delta)
		  return;

		// If current position > last position AND scrolled past navbar...
		if (st > lastScrollTop && st > navbarHeight){
		  // Scroll Down
		  $('header').removeClass('header-down').addClass('header-up');
		} else {
		  // Scroll Up
		  // If did not scroll past the document (possible on mac)...
		  if(st + $(window).height() < $(document).height()) { 
		    $('header').removeClass('header-up').addClass('header-down');
		  }
		}

		lastScrollTop = st;


}



