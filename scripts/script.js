$(document).ready(function() {

	navigator.geolocation.getCurrentPosition(function(position) {

		var skycons = new Skycons({
			color: "bada55",
			resizeClear: true
		});


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
			$('#temperatur').text(data.currently.apparentTemperature + '°C');
			//$('#based').text(data.flags['metno-license']);
			$('#summary').text(data.currently.summary);

			skycons.set($('.day0')[0], data.daily.data[0].icon);
			$('.temp_day0').text(data.daily.data[0].apparentTemperatureMax + '°C');

			skycons.set($('.day1')[0], data.daily.data[1].icon);
			$('.temp_day1').text(data.daily.data[1].apparentTemperatureMax + '°C');

			skycons.set($('.day2')[0], data.daily.data[2].icon);
			$('.temp_day2').text(data.daily.data[2].apparentTemperatureMax + '°C');

			skycons.set($('.day3')[0], data.daily.data[3].icon);
			$('.temp_day3').text(data.daily.data[3].apparentTemperatureMax + '°C');

			skycons.set($('.day4')[0], data.daily.data[4].icon);
			$('.temp_day4').text(data.daily.data[4].apparentTemperatureMax + '°C');



			skycons.set($('.js-icon')[0], data.currently.icon); 
			//skycons.add($('.js-icon')[0], Skycons.RAIN);
			skycons.play();



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