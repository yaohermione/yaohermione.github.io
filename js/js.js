var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var content = document.getElementById("content");


menu_icon.addEventListener('click',
function(e){
		
	//alert("pressed hamburger");
	//drawer.classList.toggle('open');
	
menu_icon.classList.toggle('open');
main.classList.toggle('left');
	e.stopPropagation();
})

content.addEventListener('click',
function(e){
	//alert("press cotent!");
	//drawer.classList.remove('open');
	main.classList.remove('left');
	menu_icon.classList.remove('open');
	e.stopPropagation();
})

var header_h = $( "header" ).height();
$("#banner").css('margin-top', $( "header" ).height() + "px");


