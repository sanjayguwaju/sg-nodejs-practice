//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0c2900a2c3b674dabc3d2ae731103799&query=${latitude},${longitude}`

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {

            const temperature = response.body.current.temperature
            const feelslike = response.body.current.feelslike
            const description = response.body.current.weather_descriptions[0]

            // callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.  It feels like ' + response.body.current.feelslike + ' degrees out ')

            callback(undefined, {
                message: `${description}. It currently ${temperature} degrees out. It's feels like ${feelslike} degrees out.`
            })
        }
    })
}

module.exports = forecast
