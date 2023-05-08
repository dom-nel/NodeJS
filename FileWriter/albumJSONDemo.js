let album = {
	title: 'College Dropout',
	artist: 'Kanye West'
}

let albumJSON = JSON.stringify(album);
console.log(albumJSON);

let parsedAlbum = JSON.parse(albumJSON);
console.log(parsedAlbum.artist);