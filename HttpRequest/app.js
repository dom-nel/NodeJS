var request = require('request');

var url = 'http://api.weatherstack.com/current?access_key=814b2d348b71a89bbc8ee0ea651665e8&query=charlotte';

// request function takes 2 args:
 //1. object with the url
 //2. function that will produce an error or a response
	// error is produced when the request can NOT be fullfilled
	// response is produced when the url is successfully accessed

request({url: url, json: true}, (error, response) => {
	
	if(error)
	{
		// low level errors
		console.log("Unable to connect to the Weather API")
	}
	else if(response.body.error)
	{
		// checks to see if we have an API level error
		console.log(`Error: ${response.body.error.info}`);
	}
	else
	{
		
		// Successful connection to the API
		// get the information
		
		let currentCity = response.body.location.name;
		let currentState = response.body.location.region;
		let currentDescription = response.body.current.weather_descriptions[0];
		let currentTemp = response.body.current.temperature;
		let feelsLikeTemp = response.body.current.feelslike;
		let lat = response.body.location.lat;
		let lon = response.body.location.lon;
		let time = response.body.location.localtime;


		//display the temperature
		console.log();
		console.log(`Current Location: ${currentCity}, ${currentState}`);
		console.log(`Cordinates: [${lat}, ${lon}]`);
		console.log(`Current Outdoor Condition: ${currentDescription}`);
		console.log(`Current Temperature: ${currentTemp} F`);
		console.log(`Feels like ${feelsLikeTemp} F`);
		console.log();
		console.log(`Local Time: ${time}`);
	}
	
	
	
	 
});