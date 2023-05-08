const fs = require('fs');

fs.writeFile('greeting.txt', 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});