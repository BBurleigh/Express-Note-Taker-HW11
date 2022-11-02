const router = require('express').Router();

const {notes} = require('../../db/db.json');

const {noteCreateNewNote, noteDeleteNote} = require('../../public/assets/js/functions');

router.get('/notes', (req, res) => {
    var saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    var note = noteCreateNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.param.id);
    res.json(notes);
})

module.exports = router;