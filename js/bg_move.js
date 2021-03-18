$(".background-hero").on("mousemove", function(e) {
    $(".background-hero").css({ '--x': -e.screenX / 100 + "px", '--y': -e.screenY / 100 + "px" });
    $(".background-hero-element").css('transform', "translate(" + e.screenX / 200 + "px, " + e.screenY / 100 + "px)");
});