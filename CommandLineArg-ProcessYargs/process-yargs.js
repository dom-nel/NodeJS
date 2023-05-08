var yargs = require('yargs');
//console.log(process.argv);
yargs.version('1.1.0');
console.log(yargs.argv);

//add, remove, read, list


// create the add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true, 
			type: 'string'
		},
		body: {
			describe: 'Note Body',
			demandOption: true, 
			type: 'string'
		}
	},
	handler: function(argv) {
		console.log('Title:', argv.title);
		console.log('Body Text:', argv.body);
	}
});

// create the remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a new note',
	handler: function() {
		console.log('Removing a new note');
	}
});

// create the read command
yargs.command({
	command: 'read',
	describe: 'Read a new note',
	handler: function() {
		console.log('Reading a new note');
	}
});


// create the list command
yargs.command({
	command: 'list',
	describe: 'List a new note',
	handler: function() {
		console.log('Listing a new note');
	}
});


yargs.parse();
