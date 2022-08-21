const fs = require('fs');
const add = require('./utils.js');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');
const { command, describe, demandOption } = require('yargs');

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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Make a new command remove
yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function () {
        console.log(chalk.bgRed.bold('Removing a new note....'));
    }
})

//Make a new command add
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log(chalk.bgGreen.bold('Reading note....'));
    }
})

//Make a new command add
yargs.command({
    command: 'list',
    describe: 'Lists a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.bgGreen.bold('Listing note....'), argv);
    }
})
// console.log(yargs.argv);
yargs.parse();







