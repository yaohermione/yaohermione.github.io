var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var drawer = document.getElementById("drawer");


menu_icon.addEventListener('click',
function(e){
	//alert("hover");
	//drawer.classList.toggle('open');
	main.classList.toggle('left');
	e.stopPropagation();
})

main.addEventListener('click',
function(e){
	//alert("hover");
	//drawer.classList.remove('open');
	main.classList.remove('left');
})

$(document).ready(function(){
	$('#menu_icon').click(function(){
		$(this).toggleClass('open');
	});
});

var header_h = $( "header" ).height();
//console.log("header_h is "+header_h);
//$("#intro").css({ top: $( "header" ).height() });
$("#banner").css('margin-top', $( "header" ).height() + "px");





