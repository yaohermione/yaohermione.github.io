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


