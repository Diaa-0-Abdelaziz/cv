
$(function () {
	'use strict';


// smooth scroll

 $(".links ul li a").click(function (){

  	$("html, body").animate({

  		scrollTop: $("#" + $(this).data("value")).offset().top

  	}, 1000);
  });



// nice scroll
   $("html").niceScroll({
   	   cursorcolor: "#ea690b",
   	   cursorborder: "1px solid none",
   });


});









//0000000000000000000000000000000000000000000000000


let bars = document.querySelector(".bars");
let links = document.querySelector(".links");

	
bars.onclick = function(){
	bars.classList.toggle("transform");
	links.classList.toggle("active");
}
		
	


let load = document.querySelector(".load");
window.addEventListener("load", function(){
  load.style.display = "none";
});




let start = document.querySelector(".start");
let ShowMore = document.querySelector(".Show-more");
ShowMore.onclick = function(){
	start.style.cssText = "animation-name: disNone; animation-duration: 1s; ";
	setTimeout (() =>{
   		start.style.cssText = "display: none;"
	},1000)
}

let scroll = document.querySelector(".scroll");
window.onscroll = function(){
   if (window.scrollY >= 600) {
  scroll.classList.add("scroll-active")
} else{
  scroll.classList.remove("scroll-active")
}

};
scroll.onclick = function(){
  window.scrollTo({left: 0, top: 0, behavior:"smooth"});
}






































