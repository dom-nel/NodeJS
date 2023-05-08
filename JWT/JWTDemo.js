/*
	Every express action will be one of two things
	
	1. publicly accessible
	
	2. be behing authenication and you will have to login to use the action
	
	The only two routes that will be public will be the login route and the sign up route 
	
	All other actions will require authenication 
	
	We will use JSON Web Tokens (JWT) in addition to our user Logins
	
	We can have tokens expire after a certain amount of time
*/

let jwt = require('jsonwebtoken');

// create a simple async function to test
let myFunction = async() =>{
	//use the sign function
		//takes three arguments
		//1. data that will be embedded in the token - user's id
		//2. provide a series of characters used to 'sign the token'
		//3. options for using the token - use expiresIn to set the time before the token expire
	let token = jwt.sign({_id:'abc123'}, 'abracadabra', {expiresIn: '1 day'});
	
	console.log(token);
	
	//next we can verify the token
	let data = jwt.verify(token, 'abracadabra');
	console.log(data);
};

myFunction();