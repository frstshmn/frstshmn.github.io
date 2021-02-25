let list = [
    'Accessibility',
    'Alert',
    'Animals',
    'Arrows',
    'Audio & Video',
    'Automotive',
    'Autumn',
    'Beverage',
    'Buildings',
    'Biology',
    'Camping',
    'Charity',
    'Chat',
    'Chess',
    'Childhood',
    'Clothing',
    'Code',
    'Communication',
    'Computers',
    'Construction',
    'Currency',
    'Date & Time',
    'Design',
    'Editors',
    'Education',
    'Emoji',
    'Energy',
    'Files',
    'Finance',
    'Fitness',
    'Food',
    'Fruits & Vegetables',
    'Games',
    'Genders',
    'Halloween',
    'Hands',
    'Health',
    'Holiday',
    'Hotel',
    'Household',
    'Images',
    'Interfaces',
    'Logistics',
    'Maps',
    'Maritime',
    'Marketing',
    'Mathematics',
    'Medical',
    'Moving',
    'Music',
    'Objects',
    'Payments & Shopping',
    'Pharmacy',
    'Political',
    'Religion',
    'Science Fiction',
    'Security',
    'Shapes',
    'Shopping',
    'Social',
    'Spinners',
    'Sports',
    'Spring',
    'Status',
    'Summer',
    'Tabletop Gaming',
    'Toggle',
    'Travel',
    'Users',
    'People',
    'Vehicles',
    'Weather',
    'Winter',
    'Writing',
]

$( document ).ready(function() {
    $.each(list, function (index, value) { 
         $('#list_elements').append('<div class="col-3 text-center my-3 fly"><span class="">'+ value +'</span></div> ')
    });
    setInterval(() => $(".fly").each(
        function(){
            $( this ).css({
                'transform': "translate(" + Math.floor((Math.random() * 101) - 0) + "px, "+ Math.floor((Math.random() * 101) - 0) + "px)",
                'transition': "3s cubic-bezier("+Math.random()+","+Math.random()+","+Math.random()+","+Math.random()+")"
            })
        })
    , 3000);
});

function randomize(){
    $(".random-element").remove();

    let i = 0;
    
    let random_interval = setInterval(function () {
        $(".random-element").remove();
        $('#result').append('<div class="h6 text-center random-element">' + list[Math.floor((Math.random() * list.length) - 0)] + '</div>')
        i++;
        if (i == 20){
            clearInterval(random_interval);
            i = 0;
            random_interval = setInterval(function () {
                $(".random-element").remove();
                $('#result').append('<div class="h6 text-center random-element">' + list[Math.floor((Math.random() * list.length) - 0)] + '</div>')
                i++;
                if (i == 5){
                    clearInterval(random_interval);
                    i = 0;
                    random_interval = setInterval(function () {
                        $(".random-element").remove();
                        $('#result').append('<div class="h6 text-center random-element">' + list[Math.floor((Math.random() * list.length) - 0)] + '</div>')
                        i++;
                        if (i == 5){
                            clearInterval(random_interval);
                            i = 0;
                            $(".random-element").remove();
                            $('#result').append('<div class="h6 font-weight-bold text-center random-element text-warning">' + list[Math.floor((Math.random() * list.length) - 0)] + '</div>')
                        }
                    }, 250);
                }
            }, 150);
        }
    }, 100);
    

    
}