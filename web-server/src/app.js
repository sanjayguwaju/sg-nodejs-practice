const path = require('path');
const express = require('express');



const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.send("<h1>Hello Express</h1>")
// })

// app.get('/help', (req, res) => {
//     res.send("<h2>This is help page</h2>")
// })

// app.get('/about', (req, res) => {
//     res.send({
//         "name": "Sanjay Guwaju",
//         "age": 24
//     })
// })

app.get('/weather', (req, res) => {
    res.send("This is a weather page")
})

app.listen(3000, () => {
    console.log("Server started Successfully")
})