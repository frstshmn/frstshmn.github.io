// function move(elem){
    
// }

$(document).ready(function() {
    setInterval(() => $(".fly").each(
        function(){
            $( this ).css({
                'transform': "translate(" + Math.floor((Math.random() * 51) - 25) + "px, "+ Math.floor((Math.random() * 51) - 25) + "px)",
                'transition': "3s cubic-bezier("+Math.random()+","+Math.random()+","+Math.random()+","+Math.random()+")"
            })
        })
    , 3000);
});