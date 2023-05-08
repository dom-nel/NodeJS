let greeter = (name = 'user') => {
	console.log(`Hello ${name}`);
}

// call with a name
greeter('Carl');

// call without a name
greeter();

// object for use with function below
let product = {
	label: 'Shirt', 
	price: 3.00,
	stock: 100
}

/*function with an object parameter
let transaction = (type, {label, stock}) => {
	console.log(type, label, stock);
} */

// function with an object parameter
let transaction = (type = 'stock', {label = 'Item', stock = 0} = {}) => {
	console.log(type, label, stock);
};

// call the function 
transaction();