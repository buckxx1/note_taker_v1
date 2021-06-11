//requirements
const uniqid = require("uniqid");
const fs = require("fs");
const path =require("path");

function removeNote(id) {

    const notesArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'),'utf8'));
  
    const newNotesArray = notesArray.filter(newNotes => newNotes.id != id);
  
     fs.writeFileSync(
      path.join(__dirname, '../Develop/db/db.json') ,
      JSON.stringify( newNotesArray , null, 2));
  }
  
  function createNewNote(body) {
      const note = body;
      const notesArray = JSON.parse(fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'),'utf8'));
  
      note.id = uniqid();
  
      notesArray.push(note);
      
      fs.writeFileSync(
          path.join(__dirname, '../Develop/db/db.json') ,
          JSON.stringify(notesArray, null, 2));
  
      return note;
    }
  
  function showNotes(notesArray) {
    
    const note = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'),'utf8');
    return JSON.parse(note);
  }
  
  function validateNote(note) {
    if (!note.text || typeof note.text !== 'string') {
      return false;
    }
    if (!note.title || typeof note.title !== 'string') {
      return false;
    }
    return true;
  }
  
    module.exports = {
      createNewNote,
      validateNote,
      showNotes,
      removeNote
    };