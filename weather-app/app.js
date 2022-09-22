const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=0c2900a2c3b674dabc3d2ae731103799&query=37.8267,-122.4233';

// How to request data from API of weatherstack.com

request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ' + response.body.current.temperature + ' degrees out. ' + 'It feels like ' + response.body.current.feelslike + ' out');
})

// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuamF5Z3V3YWp1IiwiYSI6ImNsN3l1eXN6NjEwZWgzcHVicHhxcDd5enAifQ.l8wfKxMPKbzPktG2_s3-Yw&limit=1 ==== We have added &limit=1 at last of the URL


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuamF5Z3V3YWp1IiwiYSI6ImNsN3l1eXN6NjEwZWgzcHVicHhxcDd5enAifQ.l8wfKxMPKbzPktG2_s3-Yw&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
    console.log(longitude, latitude);

    // console.log('The logitutude of Los Angeles is ' + response.feature.center[0] + " . The latitude f the Los Angeles is " + response.feature.center[1]);
})
