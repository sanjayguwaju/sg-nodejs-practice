const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000

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

// Important part where we wire up the geocode and forecast and show it up to screen through res. means respond. responds happens in the screen in the form of object.

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an addresses'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })
})
// Done a error not looked at the code scope at where the forecastData belongs.
// ################## Revise Destructuring ######################

// Above we have created the /weather endpoint and using that endpoint and req. means request req.query.address we can grab the addrress from the address bar.

// Important part where we wire up the geocode and forecast and show it up to screen through res. means respond. responds happens in the screen in the form of object.


app.get('*', (req, res) => {
    res.send("This is 404 page")
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})