const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
    res.send('note add');
};

notesCtrl.createNewNote = (req, res) => {
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