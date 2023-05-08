let doWorkCallback = (callback) => {
	setTimeout(() => {
		// demo an error
		callback('This is an error, undefined');
		// demo a success 
		callback(undefined, 'Success!!');
	}, 2000);
};

doWorkCallback((error, result) => {
	// if there is an error, display the error.
	if(error)
	{
		console.log(error);
	}
	else
	{
		// otherwise, display the result
		console.log(result);
	}
});