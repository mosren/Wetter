$(document).ready(function() {


	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);

		$('.longitude').text(position.coords.longitude);
		$('.latitude').text(position.coords.latitude);
		$('.accuracy').text(position.coords.accuracy);

	});






	$.ajax({
		dataType: 'jsonp',

		url: 'https://api.forecast.io/forecast/271f4e81e46fea4cf6c80d52e712ab00/46.8280275,9.394216?callback=?&units=si'
	}).done(function(data) {
		console.log(data);

		$('#temperatur').text(data.currently.apparentTemperature);
		$('#based').text(data.flags['metno-license']);

	});

	

});