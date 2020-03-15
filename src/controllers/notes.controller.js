const notesCtrl = {}
const Note = require('../models/Note');


notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
};

notesCtrl.createNewNote = async(req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({ title, description });
    await newNote.save()
    console.log(newNote);
    res.redirect('/notes');
};

notesCtrl.renderNotes = async(req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

notesCtrl.updateNote = (req, res) => {
    res.send('updated note');
};

notesCtrl.deleteNote = async(req, res) => {
    console.log(req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
};

module.exports = notesCtrl;