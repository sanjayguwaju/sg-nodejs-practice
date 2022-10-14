console.log("Javascript file is fully loaded");

// Below code is for to show up how  fetching api works.

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

// fetch('http://example.com/movies.json')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

const weatherForm = document.querySelector('form');
const search = document.querySelector('input')

// e means event 
// e.preventDefault() prevent from refresthing

// search.value will help to store the  value of input and show it in console.

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})