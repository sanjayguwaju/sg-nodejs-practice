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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an addresses'
        })
    }

    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    })
})

app.get('*', (req, res) => {
    res.send("This is 404 page")
})

app.listen(3000, () => {
    console.log("Server started Successfully")
})