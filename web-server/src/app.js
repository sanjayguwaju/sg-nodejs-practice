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
        title: "This is homepage",
        name: "Weather App"

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        "title": "This is about page",
        "name": "Weather App"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        helpMessage: 'Please avoid crowd due to the Pandemic',
        name: "Weather App"
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

app.listen(3000, () => {
    console.log("Server started Successfully")
})