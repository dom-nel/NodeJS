let add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(a < 0 || b < 0)
				reject('Numbers must be positive')
			else
				resolve(a+b);
		}, 2000)
	});
}


let doWork = async() => {
	let value = await add(1,99);
	let value2 = await add(value, 100);
	let value3 = await add(value2, 200);
	return value3;
	//throw new Error('This is an Error');
	//return "Domonique"
}

doWork().then((result) => {
	console.log('Result: ', result);
}).catch((error) => {
	console.log('Error: ', error);
})

//console.log(doWork());