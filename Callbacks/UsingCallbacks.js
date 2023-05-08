/*
	1. Define an add() function that accepts the correct argments
	2. Use setTimeout() to simulate a 2 second delay
	3. After 2 seconds are up, call the callback function with
	the sum
	4. Test your work in Node.js command prompt

*/
let add = (x, y ,callback) => {
	
	setTimeout(() => {
		let sum = x + y;
		
	
	
	callback(sum);
	}, 2000);
};

	
// your code here

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});