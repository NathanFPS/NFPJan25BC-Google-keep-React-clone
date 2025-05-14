import React from 'react';
import Note from './Note';
import './Notes.css';

const Notes = (props) => {
  const { notes, selectNote, deleteNote, archiveNote, toggleModal, setSelectedNote } = props;

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          selectNote={selectNote}
          note={note}
          deleteNote={deleteNote}
          archiveNote={archiveNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
};

export default Notes;