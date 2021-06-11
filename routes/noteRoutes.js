// requirements 
const router = require('express').Router();
const path = require('path');


const { createNewNote, validateNote, showNotes, removeNote } = require('../library/notes');

router.get('/api/notes', (req, res) => {

    let results = showNotes();
    res.json(results);
    return (results);
  });

router.post('/api/notes', (req, res) => {
    
    if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
    } else {
    const note = createNewNote(req.body);
    res.json(note);
    }
});

router.delete('/api/notes/:id', (req, res) => {

  let selectedId = req.params.id;
  removeNote(selectedId);
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });

module.exports  = router;