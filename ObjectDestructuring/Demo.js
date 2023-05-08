let action = process.argv[2];



let shirt = {
	colors: "Red,Blue,Yellow,Green,Black,White",
	sizes: "XS,S,M,L,XL,XXL",
	price: 15.99
	};
	
	
	
	let shop = (action, {colors, sizes, price}) => {
	
	
	if(action == 'buy')
	{
		console.log("Thank your for wanting to buy a shirt!");
		console.log(`Shirts come in the following sizes: ${sizes}`);
		console.log(`Shirts come in the following colors: ${colors}`);
		console.log(`Each shirt cost: ${price}`);
	}
	else if(action == 'return')
	
	{
		console.log("We are sorry that you were not satisfied with your purchase");
		console.log(`You will be refunded: ${price}`);
		console.log();
	}
	
	else
	{
		console.log();
		console.log("Error: You have chosen an invalid action");
	}
};

shop(action, shirt); 