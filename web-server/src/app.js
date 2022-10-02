const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views locations.
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Sanjay Guwaju"

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        "title": "About Page",
        "name": "Sanjay Guwaju"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'Help Page',
        helpMessage: 'Please avoid crowd due to the Pandemic',
        name: "Sanjay Guwaju"
    })
})


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

app.get('*', (req, res) => {
    res.send("This is 404 page")
})

app.listen(3000, () => {
    console.log("Server started Successfully")
})