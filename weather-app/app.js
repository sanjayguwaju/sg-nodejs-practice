const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0c2900a2c3b674dabc3d2ae731103799&query=37.8267,-122.4233';

// request({ url: url }, (error, response) => {
//     const data = JSON.parse(response.body);
//     console.log(data.current);
// })

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.current);
    console.log('It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' out');
})