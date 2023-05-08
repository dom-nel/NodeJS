



// we can make our own callbacks as well
// location will be the name of the function, that will need to accept an address
// we can then provide the callback that will be called once we have the data
	// for now, we will have a data object that will hold the latitude and longitude properties 
	// then send those to the callback portion once we get the data

let location = (address, callback) => {
	setTimeout(() => {
		let data = {
			latitude: 0,
			longitude: 0
			
	};
	//Instead of doing the return of data we have to associate data with the callback function
	//return data;
	callback(data);
	
	}, 2000);
	
};

// this call will take in the location, then populate the data object so that we can 
// see the data when the function is called.
location('Charlotte', (data) => {
	console.log(data);
});



