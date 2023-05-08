let fs = require("fs");

//read the data from 1-json.json
let dataBuffer = fs.readFileSync("1-json.json");
let fileReadJSON = dataBuffer.toString();
let file = JSON.parse(fileReadJSON);

// update the data in the JSON
file.yourName = "Domonique Nelthrope";

// stringify the data and then save the file to the json 
let fileJSON = JSON.stringify(file);
fs.writeFileSync("1-json.json", fileJSON);
console.log(file.yourName);