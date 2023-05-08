// promise review / chaining

// we would want to be able to do one thing then do something else
// example: in our task app, maybe complete a task then show a list of task that are left

let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a+b);
		}, 2000)
	});
}

/* add(1,2).then((sum) => {
	console.log(sum);
	
	// nest a promise to do something else with the sum
	
	add(sum, 5).then((result) => {
		console.log(result);
	}).catch((error) => {
		console.log(error);
	})
}).catch((error) => {
	console.log(error)
}) */

add(1, 2).then((sum) => {
	console.log(sum);
	return add(sum, 5);
}).then((result) => {
	console.log(result);
}).catch((error) => {
	console.log(error)
}) 