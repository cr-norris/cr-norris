// Draggable Stone

$(document).ready(function() {

    var width = $(window).width();
    var height = $(window).height();

    // random X
    let max_x = width;
    let min_x = 0;
    let random_x = Math.floor(Math.random() * (+max_x - +min_x)) + +min_x;

    // random Y
    let max_y = height;
    let min_y = 0;
    let random_y = Math.floor(Math.random() * (+max_y - +min_y)) + +min_y;


    $(".stone").draggable();
    $(".stone").css({
        right: random_x,
        bottom: random_y
    });

});