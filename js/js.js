var main = document.querySelector("main");
var menu_icon = document.getElementById("menu_icon");
var content = document.getElementById("content");
var header = document.querySelector("header");
var drawer = document.querySelector("nav");
var body = document.querySelector("body");
var gray = document.getElementById("main-gray-layer");


//var banner = document.getElementById("banner");


var banner_h = $( "#banner_img" ).height();
//console.log("this is banner_h: "+banner_h);

var banner_h_narrow = $( "#banner_img-narrow" ).height();
//console.log("this is banner_h_narrow: "+banner_h_narrow);

if($(window).width()>"1000"){
    //console.log("window width: "+$(window).width());
    $( "#banner" ).height(banner_h_narrow);
//console.log("this is banner_h_narrow in >1000: "+banner_h_narrow);
}
else{
  $( "#banner" ).height(banner_h);  
  //console.log("this is banner_h in else: "+banner_h);
}

//Parallax 
function simpleParallax() {
    //This variable is storing the distance scrolled
    var scrolled = $(window).scrollTop() + 1;

    //Every element with the class "scroll" will have parallax background 
    //Change the "0.3" for adjusting scroll speed.
    $('#banner').css('background-position', '0' + -(scrolled * 0.66) + 'px');
}
//Everytime we scroll, it will fire the function
$(window).scroll(function (e) {
    if($(window).width()>"1000"){
    simpleParallax();
    }
});







$("#img-gray-layer").height(banner_h);
//$("#banner-textbox").height(banner_h);



var position;
$("#menu_icon").click(function(e){
    position = $(window).scrollTop(); 
    menu_icon.classList.toggle('open');
    content.classList.toggle('left');
    header.classList.toggle('left');
    drawer.classList.toggle('left');
   
    gray.classList.toggle('left');
    document.getElementById("main-gray-layer").style.height='100%'; 
   // $('body')[0].classList.toggle('overflowhidden');
   // $('body').css('overflow', 'hidden'); 
    
   //$("body").toggleClass('overflowhidden');
   
    
    // $('#main-gray-layer').css({
    //     'display': 'block',
    //     'margin-top': scrollpos + 'px'
    // });
   //$(window).scroll(fix_window(position));
   //$(window).scroll(test(position));

    //add event handler to window after click, from now on
      // $(window).scroll(function () {
      //      $(window).scrollTop(scrollHandler); // 恢复滚动条位置
      //  });
    $(window).on('scroll',scrollHandler);

    e.stopPropagation();
});

var scrollHandler = function(){
    $(window).scrollTop(position);
    
}
// function fix_window(pos){
//     $(window).scrollTop(pos); 
//     console.log(pos);
// }

// function test(pos){
//     alert(pos);
// }


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
           
        
    }else if(st < banner_height) {
           
$("header").removeClass('fixed').removeClass('header-up');

         //$("header").css({ position: 'static', top: '0px' });
    }

    
    lastScrollTop = st;
}


var boxheight= $("#banner-textbox").height();
var allheight=$("#content").height();
//console.log(boxheight);
//console.log(allheight);

var bodytest = $("body");
//console.log(bodytest);
var body0=$("body")[0];
//console.log("this is body 0: "+body0);

//console.log($(window));




