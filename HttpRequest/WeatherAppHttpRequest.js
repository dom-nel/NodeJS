var request = require('request');



var url = 'http://api.weatherstack.com/current?access_key=814b2d348b71a89bbc8ee0ea651665e8&query=charlotte';

// request function takes 2 args:
	//1. object property
	//2. function that will produce an error or a response
		//error is produced when the request can NOT be fulfilled
		//response is produced when the url is successfully accessed
 
 request({url: url, json:true}, (error, response) => {
	 //console.log(response);
	 //let data = JSON.parse(response.body);
	// console.log(response.body);
	 
	
	 
	 
	 
	 let cityName = response.body.location.name;
	 console.log("City Name: " + cityName);
	 
	 let stateName = response.body.location.region;
	 console.log("City Name: " + stateName);
	 
	 let lon = response.body.location.lon;
	 console.log("Longitude: " + lon);
	 
	 let lat = response.body.location.lat;
	 console.log("Lattitude: " + lat);
	 
	 let weatherCondition = response.body.current.weather_descriptions;
	 console.log("Current Outdoor Condition: " + weatherCondition);
	 
	 let currentTemp = response.body.current.temperature;
	 let currentFTemp = (parseFloat(currentTemp) * (9.0/5.0)) + 32;
	 console.log("Current Temperature: " + currentFTemp);
	 
	 let feelsLikeTemp = response.body.current.feelslike;
	 
	 let feelsLikeFTemp = (parseFloat(feelsLikeTemp) * (9.0/5.0)) + 32;
	 console.log("Feels Like Temperature: " + feelsLikeFTemp);
	 
	 let currentTime = response.body.location.localtime;
	 console.log("Current TIme: " + currentTime)
	 
	  
	 
	 
	 
 })