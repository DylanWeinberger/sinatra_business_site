$(document).ready(function(){

console.log("hello");
$('.light-box').css({
	'opacity':'0'
});

// $(".shot").hide()
// function to make the xwing flyable with WASD
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
// light box pop up ad for all pages.
$('body').mouseover(function(){
	$(".light-box").css({
		"opacity": '1'
	});
});
// light box fade away. and ads for upcming shows fade in.
$('body').click(function(){
	$(".light-box").fadeOut(1000);
	$('.forget').fadeIn(2000);
	$('.max').fadeIn(5000);
	$('.snootles').fadeIn(10000);

});


// c3p0 flies off screen. message of no droids fades in same for millenium falcon below
$(".c3po").click(function(){
		$(".c3po").css({
			"left": "-=500px"
		}, 20000);
		$(".droidmessage").fadeIn(2000);
	});

$(".falcon").click(function(){
		$(".falcon").css({
			"left": "+=1200px"
		}, 9000);
		$(".shot").fadeIn(2000);
		// $(".shot").fadeIn(2000);	
		// $(".shot").show()	
	});

// hutt grows on click
$('.hutt').click(function(){
	$('.hutt').css ({
		"width": "150%"
	});
});

// found this answer on stack overflow for playing an audio file. Play a jabba laugh on the click of jabba.
    var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'images/Jabba_the_Hutt-Laugh.mp3');
        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
        // found this lesson on stack overflow to play a sound of jabba laughing if you click him

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.hutt').click(function() {
            audioElement.play();
        });







// alert ("No Droids Allowed. Click the droid to get rid of it!!! NOW!");
});