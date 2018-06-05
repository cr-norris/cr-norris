//Navigation

$(".nav-trigger-desktop").mouseenter(function() {
    $('.outside').addClass('in');
});

$(".nav-trigger-mobile").click(function(){
	$('.outside').toggleClass('in');
	$('.nav-close-icon').toggleClass('is-showing');
});

$("#navigation").mouseleave(function() {
    $('.outside').removeClass('in');
});

// Audio

var x = document.getElementById("player");
x.autoplay = true;
x.load();


$("#player").prop("volume", 0.05);


$(".audio-icon").click(function(){
	var bool = $("#player").prop("muted");
        $("#player").prop("muted",!bool);
        $(this).toggleClass("dim");
});