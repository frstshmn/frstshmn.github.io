$('#give_tickets').click(function(event) {
	// Students list
	let list = $('#persons').val().split('\n');

	// List of tickets
	let ticket_numbers = [];

	// Students count
	let l = list.length;
	
	// If entered tickets count is 
	// - not null
	// - more than number of students
	// Redefine l with entered tickets count
	if ($('#tickets_count').val() != null && $('#tickets_count').val() >= l){
		l = $('#tickets_count').val();
	}

	// Lucky ticket
	let lucky_ticket = getRndInteger(1, l);

	while(ticket_numbers.length < l){
		// Generating number
		let r = getRndInteger(1, l);
		
		// If number doesn't exist - adding to number list
		if(ticket_numbers.indexOf(r) === -1) 
			ticket_numbers.push(r);
	}
	
	$('.list-item').remove();
	$.each(list, function(index, value) {
		if (ticket_numbers[index] == lucky_ticket){
			$('#result').append('<p class="list-item"><b>'+ ticket_numbers[index] +'</b><i class="fas fa-star text-warning"></i> - '+ value +'<p>');
		}
		else {
			$('#result').append('<p class="list-item"><b>'+ ticket_numbers[index] +'</b> - '+ value +'<p>');
		}
	});
});

// Generating random integer
// Input: minimal value (int), maximal value(int)
// Output: return random number between two input parameters(int)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
