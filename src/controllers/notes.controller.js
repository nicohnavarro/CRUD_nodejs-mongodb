const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
};

notesCtrl.createNewNote = (req, res) => {
    console.log(req.body);
    res.send('added note');
};

notesCtrl.renderNotes = (req, res) => {
    res.send('render notes');
};

notesCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

notesCtrl.updateNote = (req, res) => {
    res.send('updated note');
};

notesCtrl.deleteNote = (req, res) => {
    res.send('delete note');
};

module.exports = notesCtrl;