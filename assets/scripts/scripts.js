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