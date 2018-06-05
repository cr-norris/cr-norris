//Navigation

$(".nav-trigger-desktop").mouseenter(function() {
    $('.outside').addClass('in');
});


$("#navigation").mouseleave(function() {
    $('.outside').removeClass('in');
});

$(".nav-trigger-mobile.close").click(function(){
	$('.outside').toggleClass('in');
});