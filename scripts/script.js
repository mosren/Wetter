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


		var a = new Array();

		a[0] = "MO";
		a[1] = "DI";
		a[2] = "MI";
		a[3] = "DO";
		a[4] = "FR";
		a[5] = "SA";
		a[6] = "SO";
		a[7] = "MO";
		a[8] = "DI";
		a[9] = "MI";
		a[10] = "DO";
		a[11] = "FR";
		a[12] = "SA";
		a[13] = "SO";


		var d = new Date();
		var tagnummer = d.getDay();


		$.ajax({ // Forecast Anfrage
			url: 'https://api.forecast.io/forecast/271f4e81e46fea4cf6c80d52e712ab00/' + koordinaten.latitude + ',' + koordinaten.longitude,
			data: {
				units: 'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done(function(data) {
			

			//console.log(data);
			$('#temperatur').text(data.currently.apparentTemperature + '°C');   // (math.round(data.currently.apparentTemperature) + '°C')
			$('#summary').text(data.currently.summary);

			for (var counter = 0; counter < 5; counter ++) {
				console.log(counter);
				skycons.set($('.day'+ counter)[0], data.daily.data[counter].icon);
				$('.temp_day' + counter).text(data.daily.data[counter].apparentTemperatureMax + '°');
				$('.day_name' + counter).text(a[tagnummer + counter]);
			};

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