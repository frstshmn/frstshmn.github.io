$('#calculate').click(function(event) {
	// Students list
	let list = $('#clocks').val().split('\n');

	// List of tickets
	let ticket_numbers = [];

	// Students count
	let l = list.length;
	
	// If entered tickets count is 
	// - not null
	// - more than number of students
	// Redefine l with entered tickets count
	if ($('#clocks_count').val() != null && $('#clocks_count').val() >= l){
		l = $('#clocks_count').val();
	}

	$('.list-item').remove();
	$.each(list, function(index, value) {
		$('#result').append('<p class="list-item"><b>'+ ticket_numbers[index] +'</b> - '+ value +'<p>');
	});
});
