//Array in JS
let letters = ["a", "b", "c", "d"];

console.log("An array of letters: ");
console.log(letters);

//use indexing to access array items
console.log(letters[0]);
console.log(letters[1]);

// use push() to add items to an array in JS
letters.push("e");
letters.push("f");

console.log("updated array of letters: ");
console.log(letters);

//use slice to return selected items in an array
console.log("Use slice() on the array of letters");
var slice1 = letters.slice(1);
//return the first 3 items in the array 
var slice2 = letters.slice(0,3);
//return the second and third item in the Array 
var slice3 = letters.slice(1,3);

console.log(slice1);
console.log(slice2);
console.log(slice3);

// use join() in order to return items in an array into a single String
console.log("Using join on an array of letters / strings");

var joined = letters.join(", ");
var joined = letters.join(", ");

console.log(joined);

// use a full JS string 
var jsString = "JS is really fun!";
console.log(jsString);

console.log(jsString[0]);
console.log(jsString[1]);
console.log(jsString[2]);
console.log(jsString[3]);
console.log(jsString[4]);
console.log(jsString[5]);
console.log(jsString[6]);

// split a string into an array of substrings
// split based on where the spaces are located in the original String
var jsStringArray = jsString.split(" ");

console.log("Use split() to split a string into an array of substrings: ");
console.log(jsStringArray);