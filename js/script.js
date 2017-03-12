


// waiting for the document to be ready
$(document).ready(function() {
	// $.click to figure out when the user clicks the "submit" button
	$('#submit-btn').click(function() {
		event.preventDefault();
		// get the city name
		var cityName = $('#city-type').val();

		cityName = cityName.toLowerCase();
		console.log(cityName)

		// the ```||``` operator in conditionals to allow for multiple string values to execute ```if``` statement code
		// If a user submits "New York" or "New York City" or "NYC"
		if (cityName == 'new york' || cityName == 'new york city' || cityName == 'nyc') {
			$('body').attr('class','nyc');
		}
		// If a user submits "San Francisco" or "SF" or "Bay Area"
		if (cityName == 'san francisco' || cityName == 'sf' || cityName == 'bay area') {
			$('body').attr('class','sf');
		}
		// If a user submits "Los Angeles" or "LA" or "LAX"
		if (cityName == 'los angeles' || cityName == 'la' || cityName == 'lax') {
			$('body').attr('class','la');
		}
		// If a user submits "Austin" or "ATX"
		if (cityName == 'austin' || cityName == 'atx') {
			$('body').attr('class','austin');
		}
		// If a user submits "Sydney" or "SYD"
		if (cityName == 'sydney' || cityName == 'syd') {
			$('body').attr('class','sydney');
		}
	});
});