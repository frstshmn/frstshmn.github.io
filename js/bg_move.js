$(".background-hero").on("mousemove", function(e) {
    $(".background-hero").css({'--y': -e.screenY / 100 + "px" });
    $(".background-hero").css({'--x': -e.screenX / 100 + "px" });
    $(".background-hero-element").css('transform', "translate(" + (e.screenX-50) / 100 + "px, " + (e.screenY-50) / 100 + "px)");
});