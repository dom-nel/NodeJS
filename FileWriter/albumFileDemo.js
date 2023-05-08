let fs = require('fs');

let album = {
	title: 'College Dropout',
	artist: 'Kanye West'
}

let albumJSON = JSON.stringify(album);
fs.writeFileSync("album.json", albumJSON);

let dataBuffer = fs.readFileSync("album.json");
let albumReadJSON = dataBuffer.toString();
let newAlbum = JSON.parse(albumReadJSON);

console.log(newAlbum.title);
console.log(newAlbum.artist);