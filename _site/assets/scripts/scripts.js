$(".close").click(function(){
	$('.outside').toggleClass('in');
	$('.bar').toggleClass('active');
	$('.nav-close-icon').toggleClass('is-showing');
});

$("#player").prop("volume", 0.05);

$(".audio-icon").click(function(){
	var bool = $("#player").prop("muted");
        $("#player").prop("muted",!bool);
        $(this).toggleClass("dim");
});