const fs = require('fs');
const chalk = require('chalk');

// Above all the modules above

const getNotes = () => 'Your notes...'

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    // const duplicateNotes = notes.filter(function (note) {
    //     return notes.title === title
    // })

    if (duplicateNotes.length === 0) {
        //Below in notes.push it take title & body from above function and push to the array.
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New notes is saved in notes.json'));
    } else {
        console.log(chalk.bgRed('Notes is already taken...'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.bgRed('Notes Deleted....'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.bgBlue('No notes found...'));
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
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
    addNotes: addNotes,
    removeNote: removeNote
}