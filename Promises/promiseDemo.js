let doWorkPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// things go wrong, pass in a reject
		//reject('This is an error!');
		// things go right, pass in a resolve
		resolve("This is a success!");
	}, 2000);
});

// then executes the promis and then tells what to do if the promise 
// is successful - 'resolve'
doWorkPromise.then((result) => {
	// use .then() to tell what action to take with the data when something
	// goes right!
	console.log(result);
}).catch((error) => {
	// display the error if the resolve is unsuccessful
	console.log(error);
});