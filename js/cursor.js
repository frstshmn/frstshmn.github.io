function moveCursor(e) {
    $('.cursor').css({ "top": e.pageY, "left": e.pageX });
}

$(window).on('mousemove', moveCursor);
$(window).on('scroll', moveCursor);

$('.cursor-active').mouseenter(function() {
    $('.cursor').css({ "background": "url('http://spacedesign.in.ua/images/shuriken.png')", "animation": "1s infinite alternate rotate-shuriken" });
});

$('.cursor-active').mouseleave(function() {
    $('.cursor').css({ "background": "url('http://spacedesign.in.ua/images/cursor.png')", "animation": "0" });
});