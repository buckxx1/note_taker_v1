const router = require('express').Router();

const { findById, createNewNote, validateNote } = require('../../library/notes');
const { notes } = require('../../Develop/db/db.json');

//pull all notes in json
router.get('/notes', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

//get json note with id 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

//Create new note
router.post('./notes', (req, res) => {
    req.body.id = Date.now().toString();
    if(!validateNote(req.body)) {
        res.status(400).send('The note is formated')
    } else {
        const note = createNewNote(req.body, notes);
        console.log(note);
        res.json(note);

    }
});

// remove note 

router.delete('/notes/:id', (req, res) => {
    const note = deleteById(req.params.id, notes);
    res.json(note);
})

module.exports = router;