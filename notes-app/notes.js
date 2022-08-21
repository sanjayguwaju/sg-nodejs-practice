const fs = require('fs');
const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()

    //Below in notes.push it take title & body from above function and push to the array.
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
        // When there is empty file then it return empty array 
        //empty notes  file === empty array
    }

}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes
}