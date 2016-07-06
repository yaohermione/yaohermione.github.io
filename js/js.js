var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var drawer = document.getElementById("drawer");


menu_icon.addEventListener('click',
function(e){
	//alert("pressed");
	//drawer.classList.toggle('open');
	main.classList.toggle('left');
	menu_icon.toggleClass('open');

	e.stopPropagation();
})

main.addEventListener('click',
function(e){
	//alert("hover");
	//drawer.classList.remove('open');
	//main.classList.remove('aaa');
	menu_icon.classList.remove('open');
	e.stopPropagation();
})

var header_h = $( "header" ).height();
$("#banner").css('margin-top', $( "header" ).height() + "px");


