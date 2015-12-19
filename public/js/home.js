$(document).ready(function(){

console.log("hello");
$('.light-box').css({
	'opacity':'0'
});

$('body').mouseover(function(){
	$(".light-box").css({
		"opacity": '1'
	});
});

$('body').click(function(){
	$(".light-box").fadeOut(1000);
	$('.forget').fadeIn(2000);
	$('.max').fadeIn(5000);
	$('.snootles').fadeIn(10000);

	// ({
	// 	"opacity": ".7"
	// });
});



$(".c3po").click(function(){
		$(".c3po").animate({
			"left": "-=1000px"
		}, 8000);
	});
$(".falcon").click(function(){
		$(".falcon").animate({
			"left": "+=2000px"
		}, 8000);
	});







// alert ("No Droids Allowed. Click the droid to get rid of it!!! NOW!");
});