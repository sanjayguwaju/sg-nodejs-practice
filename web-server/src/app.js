const path = require('path');
const express = require('express');



const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        "title": "This is homepage",
        "name": "Weather App"

    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        helpMessage: 'Please avoid crowd due to the Pandemic'
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