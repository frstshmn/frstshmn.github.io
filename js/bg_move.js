$(".background-hero").on("mousemove", function(e) {
    $(".background-hero").css({'--y': -e.screenY / 100 + "px" });
    $(".background-hero").css({'--x': -e.screenX / 100 + "px" });
    $(".background-hero-element").css('transform', "translate(" + (e.screenX-50) / 100 + "px, " + (e.screenY-50) / 100 + "px)");
});

$(".portfolio-logo").on("mousemove", function(e) {
    var pos = $(this).offset();
    var elem_left = pos.left;
    var elem_top = pos.top;
    // положение курсора внутри элемента
    var ww = e.pageX - elem_left;
    var wh = e.pageY - elem_top;

    $(this).css('--mouseX', -ww / 20 + "deg");
    $(this).css('--mouseY', -wh / 20 + "deg");
});
