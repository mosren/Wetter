$(document).ready(function() {

/*
	navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);

		$('.longitude').text(position.coords.longitude);
		$('.latitude').text(position.coords.latitude);
		$('.accuracy').text(position.coords.accuracy);

	});
*/


	navigator.geolocation.getCurrentPosition(function(position) {



		var skycons = new Skycons({
			color: "bada55",
			resizeClear: true
		});

		skycons.add($('.js-icon')[0], Skycons.RAIN);
		skycons.play();






		var koordinaten = {
			longitude: position.coords.longitude,
			latitude: position.coords.latitude
		};


		$.ajax({ // Forecast Anfrage
			url: 'https://api.forecast.io/forecast/271f4e81e46fea4cf6c80d52e712ab00/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {
				units: 'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done(function(data) {
			console.log(data);
			$('#temperatur').text(data.currently.apparentTemperature);
			//$('#based').text(data.flags['metno-license']);



			$.ajax({ // Google Geocoding Anfrage
				url: 'https://maps.googleapis.com/maps/api/geocode/json',
				data: {
					latlng: koordinaten.latitude + ',' + koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					lang: 'de'
				}
			}).done(function(data) {
				console.log(data);
				$('#standort').text(data.results[2].formatted_address);
			});

		});

	});
	

});