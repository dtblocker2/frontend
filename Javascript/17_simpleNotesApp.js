const saveNoteBtn = document.getElementById('saveNote');
const noteInput = document.getElementById('noteInput');
const notesContainer = document.getElementById('notesContainer');

saveNoteBtn.addEventListener('click', () => {
    const note = noteInput.value.trim();
    if (! note) return;
    const noteElement = document.createElement('li');
    noteElement.textContent = note;
    notesContainer.appendChild(noteElement);

    noteInput.value = "";
    const notes = JSON.parse(localStorage.getItem('notes')) ?? [];
    notes.push(note);

    localStorage.setItem('notes', JSON.stringify(notes));

});

function loadNotes() {
    const loadedNotes = localStorage.getItem('notes');
    // below code uses [] if loadedNotes if null or undefined
    const notes = JSON.parse(loadedNotes) ?? [];

    for (let note of notes) {
        const noteElement = document.createElement('li');
        noteElement.textContent = note;
        notesContainer.appendChild(noteElement);
    };
};

loadNotes();