// CRUD

/*

	CREATE - create data to be put into the database
	
	READ - read data from a database 
	
	UPDATE - update data that is already in a database
	
	DELETE - delete database data
*/

// import the modules to be able to do the 
// Database operations listed above
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;
let ObjectID = mongodb.ObjectID;

// ObjectIDs are 12 digit values which are made up of the following
	// a 4 byte value representing the UNIX epoch (timestamp)
	// a 5 byte random value
	// a 3 byte counter staring with a random value

let connectionURL = 'mongodb://127.0.0.1:27017';
let databaseName = 'task-manager';

// call MongoClient to connect to the database
	// takes the following 
	// 1. database URL
	// 2. URL Parsing mechanism 
	// 3. callback function that tells what to do when a connection is attempted
		// a. have an error with the connection 
		// b. client - that does operations on the database
/* MongoClient.connect(connectionURL,  {useNewUrlParser: true}, (error, client) => {
	// if there is an error, see what went wrong
	if(error)
	{
		return console.log('Unable to connect to the database');
	}
	else
	{
		// successfull database connection 
		
		// use client.db() function to connect to a database, and store the reference
		let db = client.db(databaseName); // connects to the task-manager database
		
		// use collection reference .insertOne() function to insert data
		db.collection('courses').insertOne(
			{
				courseNumber: 'CSC 174',
				courseName: 'Server-Side JavaScript',
				credits: 3.0
			},
			(error, result) => {
				// function to be ran based on the insertOne action
				if(error)
				{
					// display message if there is an error with inserting
					return console.log('Unable to insert document into database');
				}
				else
				{
					// display if the insert is successful
						// use result.ops to see what information was inserted into the database
					console.log(result.ops);
				}
			}
		
		);
		
		db.collection('courses').insertMany([
		
			{
				courseNumber: 'CSC 174',
				courseName: 'Server-Side JavaScript',
				credits: 3.0
			},
			{
				courseNumber: 'CSC 251',
				courseName: 'Server-Side JavaScript',
				credits: 3.0
			},
			{
				courseNumber: 'CTI 110',
				courseName: 'Server-Side JavaScript',
				credits: 3.0
			},
			{
				courseNumber: 'CSC 151',
				courseName: 'Server-Side JavaScript',
				credits: 3.0
			}
		], (error, result) => {
			// function to be called when the insert is complete
			
			if(error)
			{
				// if something goes wrong, display this message
				return console.log('Unable to insert documents');
			}
			else
			{
				console.log(result.ops);
			}
		});
		console.log('Data uploaded Successfully')
	}
		
}); */

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
	// if there is an error, see what went wrong
	if(error)
	{
		return console.log('Unable to connect to the database');
	}
	else
	{
		// successful database connection
		
		// use client.db() function to connect to a database, and store the reference
		let db = client.db(databaseName); // connects to the task-manager database
		
		// use delete one to delete a database document with matching criteria
		db.collection('courses').deleteOne({
			// look for the following criteria
			_id: new ObjectID("6425dba10ee3410577b0fd35")
		},
		{
			// $set updates the value of the fields specified
			$set: {
				courseNumber: "CSC 258",
				courseName: "JAVA Enterprise Applications"
			}
		}).then((result) => {
			// use .then to see the result of the Promise
			console.log(result);
		}).catch((error) => {
			// display an error if we get one
			console.log(error);
		})
		
	}
});//mongoclient end