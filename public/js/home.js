$(document).ready(function(){

console.log("hello");
$('.light-box').css({
	'opacity':'0'
});

$(document).keydown(function(){
		if (event.keyCode == 68) {
			$(".xwing").animate({
				"left": "+=240px"
			}, 10);
		}else if (event.keyCode == 65) {
			$(".xwing").animate({
				"left": "-=240px"
			}, 10);
		}else if  (event.keyCode == 87) {
			$(".xwing").animate({
				"top": "-=240px"
			}, 10);	
		}else if (event.keyCode == 83) {
			$(".xwing").animate({
				"top": "+=240px"
			}, 10);
		}	else{

		}
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
	// $('.xwing').animate({left: "+=1800"}, 9000);
	// $
	// I was going to make an x-wing fly in slowly from off the screen when the user clicks on the page. But i decided instead
	// to allow the user to control the xwing with wasd 
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