// function showWeb(){
//     $("#main_screen").hide("slide", { direction: "right" }, 500);
//     $("#web_portfolio").show("slide", { direction: "right" }, 500);
// }

// function hideWeb(){

// }

// function showGraphics(){

// }

// function hideGraphics(){

// }

// $(document).ready(function() {
//     $("#web_portfolio").hide();
//     $("#main_screen").show();

//     $('#web_portfolio_button').click(() => {

//         $("#web_portfolio").toggle("slide", { direction: "right" }, 500);
//         //$("#main_screen").toggle("slide", { direction: "right" }, 500);
//     });
// });

function toggleWeb() {
    // Hide to left / show from left
    $("#main_screen").toggle("slide", { direction: "right" }, 500);

    // Show from right / hide to right
    $("#web_portfolio").toggle("slide", { direction: "left" }, 500);
}

$(document).ready(function() {
    //$('#exampleModal3').modal('toggle');
    //$("#main_screen").css({ 'filter': "blur(5px)" });
    $("#web_portfolio").toggle("slide", { direction: "left" }, 500);
    $('#web_portfolio_button').click(toggleWeb);
    $('#web_portfolio_button_back').click(toggleWeb);
});

// $("#exampleModal3").on("hidden.bs.modal", function() {
//     $("#main_screen").css({'filter': "blur(0px)"});
// })

function copyText(string) {
    navigator.clipboard.writeText("<empty clipboard>").then(function() {
        /* clipboard successfully set */
    }, function() {
        /* clipboard write failed */
    });
}