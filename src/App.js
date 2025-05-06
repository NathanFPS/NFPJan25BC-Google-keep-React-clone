import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';

let NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      { ...note, archived: false },
    ]);
  };

  const editNote = (editedNote) => {
    setNotes((prevNotes) => {
      const newArray = prevNotes.map((note) => {
        if (editedNote.id === note.id) {
          note.title = editedNote.title;
          note.text = editedNote.text;
        }
        return note;
      });
      return newArray;
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        if (note.id === id) {
          note.archived = !note.archived; // Toggle archived status for the specific note
        }
        return note;
      })
    );
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const toggleNotes = (showNotes) => {
    setShowArchive(false);
    setNotes((prevNotes) =>
      prevNotes.map((note) => {
        note.archived = !showNotes;
        return note;
      })
    );
  };

  const toggleArchive = (showArchive) => {
    setShowArchive(true);
    setNotes((prevNotes) =>
      prevNotes.map((note) => ({
        ...note,
        archived: showArchive,
      }))
    );
  };

  return (
    <div>
      <Navbar />
      <Sidebar toggleNotes={toggleNotes} toggleArchive={toggleArchive} />
      <Form addNote={addNote} />
      <Notes
        notes={notes.filter((note) => (showArchive ? note.archived : !note.archived))}
        deleteNote={deleteNote}
        archiveNote={archiveNote}
        toggleModal={toggleModal}
        selectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          selectedNote={selectedNote}
          setSelectedNote={setSelectedNote}
          editNote={editNote}
        />
      )}
    </div>
  );
};

export default App;


