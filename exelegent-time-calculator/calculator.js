$('#calculate').click(function(event) {
	// Students list
	$('.list-item').remove();

	let list = $('#clocks').val().split('\n');
	let not_finished_start_time = 0;
	let times = [];

	$.each(list, function(index, value) {
		if (value == '') {
			return;
		}

		let time = value.replace(' PM', '').replace(' AM', '').split(' - ');

		let start = time[0].split(':');
		let start_hours = parseInt(start[0]);
		let start_minutes = parseInt(start[1]);

		if (time[1] == undefined) {
			not_finished_start_time = start_hours * 60 + start_minutes;
		} else {
			let end = time[1].split(':');
			let end_hours = parseInt(end[0]);
			let end_minutes = parseInt(end[1]);

			let start_time = start_hours * 60 + start_minutes;
			let end_time = end_hours * 60 + end_minutes;

			let amount = (end_time - start_time);

			times.push([start_time, end_time, amount]);
		}

	});

	if ($('#clocks_count').val() != null){
		total_time = $('#clocks_count').val();
	} else {
		total_time = 8;
	}

	let total_worked = 0;
	$.each(times, function(index, value) {
		total_worked += value[2];
	});
	$('#result').append('<p class="list-item">Відпрацьовано: ' + minutesToTime(total_worked) + '<p>');
	$('#result').append('<p class="list-item">Залишилось: ' + minutesToTime((total_time * 60) - total_worked) + '<p>');
	$('#result').append('<p class="list-item">Зробити клок-аут в:<p>');
	$('#result').append("<p class='list-item'>\t 	UTC: " + minutesToTime(not_finished_start_time + ((total_time * 60) - total_worked)) + '<p>');
	$('#result').append("<p class='list-item'>\t 	за Києвом: " + minutesToTime((not_finished_start_time + ((total_time * 60) - total_worked)) + (7*60) + (12*60)) + '<p>');
});

function minutesToTime(minutes) {
	if (minutes < 0) {
		return '0:00';
	}
	let hours = Math.floor(minutes / 60);
	let mins = minutes % 60;
	if (mins < 10) {
		mins = '0' + mins;
	}
	return hours + ':' + mins;
}
