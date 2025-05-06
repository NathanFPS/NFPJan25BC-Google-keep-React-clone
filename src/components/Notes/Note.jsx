import React, { useState } from 'react';

const Note = (props) => {
  const { toggleModal, note, selectedNote, archiveNote, deleteNote } = props;
  const [isHover, setIsHover] = useState(false);

  const noteClickHandler = () => {
    selectedNote(note);
    toggleModal();
  };

  const hoverOverHandler = () => {
    setIsHover(true);
  };
  const hoverOutHandler = () => {
    setIsHover(false);
  };

  const archiveHandler = (e) => {
    e.stopPropagation();
    archiveNote(note.id);
  };

  const deleteHandler = (e) => {
    e.stopPropagation();
    deleteNote(note.id);
  };

  return (
    <div
      className={`note ${note.archived ? 'archived' : ''}`}
      id={props.id}
      onClick={noteClickHandler}
      onMouseOver={hoverOverHandler}
      onMouseOut={hoverOutHandler}
    >
      {isHover && (
        <span className="material-symbols-outlined hover small-icon">
          check_box
        </span>
      )}
      <div className="title">{note.title}</div>
      <div className="text">{note.text}</div>
      <div 
        className="note-footer" 
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">add_alert</span>
          <span className="tooltip-text">Remind me</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">person_add</span>
          <span className="tooltip-text">Collaborator</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">palette</span>
          <span className="tooltip-text">Change Color</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">image</span>
          <span className="tooltip-text">Add Image</span>
        </div>
        <div className="tooltip" onClick={archiveHandler}>
          <span className="material-symbols-outlined hover small-icon">archive</span>
          <span className="tooltip-text">Archive</span>
        </div>
        <div className="tooltip" onClick={deleteHandler}>
          <span className="material-symbols-outlined hover small-icon">delete</span>
          <span className="tooltip-text">Delete</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover small-icon">more_vert</span>
          <span className="tooltip-text">More</span>
        </div>
      </div>
    </div>
  );
};

export default Note;



