import React from 'react'
import Note from './Note'
import './Notes.css'

const Notes = (props) => {
  const { notes, deleteNote, archiveNote, toggleModal, selectedNote } = props;

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          toggleModal={toggleModal}
          selectedNote={selectedNote}
        />
      ))}
    </div>
  );
};

export default Notes;