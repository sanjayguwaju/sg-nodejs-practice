const fs = require('fs');

const databuffer = fs.readFileSync('data.json');
const realData = databuffer.toString();
const user = JSON.parse(realData);
console.log(user.name);

user.name = "Joey"
user.age = "34"

const userJSON = JSON.stringify(user);
console.log(userJSON);
fs.writeFileSync('data.json', userJSON)

