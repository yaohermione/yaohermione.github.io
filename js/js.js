var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var drawer = document.getElementById("drawer");


menu_icon.addEventListener('click',
function(e){
	//alert("hover");
	drawer.classList.toggle('open');
	main.classList.toggle('left');
	e.stopPropagation();
})

main.addEventListener('click',
function(e){
	//alert("hover");
	drawer.classList.remove('open');
	main.classList.remove('left');
})