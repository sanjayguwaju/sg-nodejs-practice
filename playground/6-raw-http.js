const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=0c2900a2c3b674dabc3d2ae731103799&query=37.8267,-122.4233';

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()