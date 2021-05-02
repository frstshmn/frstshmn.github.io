$('#portfolioTabs button').click(function (e) {
    $('#portfolioTabs button').removeClass('pressed');
    $(this).addClass('pressed');
    $('#portfolioTabContent>div').removeClass('active');
    $('#portfolioTabContent>div').removeClass('show');
    $($(this).data('bsTarget')).addClass('active');
    $($(this).data('bsTarget')).addClass('show');
});