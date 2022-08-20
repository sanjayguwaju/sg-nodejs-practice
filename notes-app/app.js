const fs = require('fs');
const add = require('./utils.js');

// Start: Use of validator explained
const validator = require('validator');

console.log(validator.isEmail('sanjayguwaju@gmail.com'));

//End: Use of the validator explained

const chalk = require('chalk');

console.log(chalk.blue.bgGreen.bold.inverse("Success !"));
console.log(chalk.blue.bgGreen.bold.inverse("Success Again !!"));
console.log(chalk.blue.bgGreen.bold.inverse("Success Again Once More !!!"));

const getNotes = require('./notes.js');

fs.writeFileSync('notes.txt', 'This is newly created notes.txt file.');
fs.appendFileSync('notes.txt', ' I am at begginers level of node.js');

const sum = add(4, -2);
console.log(sum);

getNotes();


//Learning to take input from user using argvv
// console.log(process.argv);
const command = process.argv[2];

if (command === 'add') {
    console.log(chalk.bgGreen.bold('Adding notes....'));
} else if (command === 'remove') {
    console.log(chalk.bgRed.bold('Removing notes....'));
}

console.log(process.argv);







