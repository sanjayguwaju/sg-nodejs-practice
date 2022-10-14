console.log("Javascript file is fully loaded");

// Below code is for to show up how  fetching api works.

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})

// fetch('http://example.com/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));