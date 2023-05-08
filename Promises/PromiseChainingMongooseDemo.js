// promise chaining with Mongoose 
require('./src/db/mongoose.js');
let User = require('./src/models/user.js');

// find a user by their ID, then change the age

// then use a promise chain  to display the number of users with the age

User.findByIdAndUpdate('642f456d8671396d6f4c92cc', {age: 34}).then((user) => {
	console.log(user);
	return User.countDocuments({age:34});
}).then((result) => {
	console.log(`There are ${result} database documents with Age = 34`);
}).catch((error) => {
	console.log(error);
})