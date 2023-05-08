// write a function that calculates the area of a circle
var radius = 10.75;

function calcArea (radius)
{
	return  Math.PI * (radius * radius);
}
// call function to display the area of a circle with radius of 10.75

console.log("Area of a circle with radius " + radius + " = " +calcArea(10.75).toFixed(2));