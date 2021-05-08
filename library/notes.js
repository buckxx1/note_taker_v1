//requirements
const fs = require("fs");
const path =require("path");

//grab note by id 
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id) [0];
    return result;
};

//make new note then validate
function createNewNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    )
}
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || note.text !== 'string') {
        return false;
    }
    if (!note.id || typeof note.id !== 'string') {
        return false;
    }
}
module.exports = {
    findById,
    createNewNote,
    validateNote,
}