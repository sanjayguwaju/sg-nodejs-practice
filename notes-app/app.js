const fs = require('fs');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const { command, describe, demandOption } = require('yargs');
const { listNote } = require('./notes.js');

//Make a new command add
yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Make a new command remove
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Make a new command add
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler() {
        console.log(chalk.bgGreen.bold('Reading note....'));
    }
})

//Make a new command add
yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler() {
        notes.listNotes()
    }
})
// console.log(yargs.argv);
yargs.parse();