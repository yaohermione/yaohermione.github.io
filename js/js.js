var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var drawer = document.getElementById("drawer");
var content = document.getElementById("content");


menu_icon.addEventListener('click',
function(e){
	//alert("pressed");
	//drawer.classList.toggle('open');
	main.classList.toggle('left');
	menu_icon.toggleClass('open');

	e.stopPropagation();
})

content.addEventListener('click',
function(e){
	alert("press cotent!");
	//drawer.classList.remove('open');
	main.classList.remove('left');
	menu_icon.classList.remove('open');
	e.stopPropagation();
})

var header_h = $( "header" ).height();
$("#banner").css('margin-top', $( "header" ).height() + "px");


