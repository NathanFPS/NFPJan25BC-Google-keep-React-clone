import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ toggleNotes, toggleArchive }) {
    const [isArchiveActive, setIsArchiveActive] = useState(false); // Tracks whether archived notes are shown

    const handleLightbulbClick = () => {
        setIsArchiveActive(false); // Set to show regular notes
        toggleNotes(true); // Show regular notes
    };

    const handleArchiveClick = () => {
        setIsArchiveActive(true); // Set to show archived notes
        toggleArchive(true); // Show archived notes
    };

    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={handleLightbulbClick}>
                <span className="material-symbols-outlined hover active">
                    lightbulb
                </span>
                <span className="sidebar-text">Notes</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">notifications</span>
                <span className="sidebar-text">Reminders</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">edit</span>
                <span className="sidebar-text">Edit Labels</span>
            </div>
            <div className="sidebar-item" onClick={handleArchiveClick}>
                <span className="material-symbols-outlined hover">archive</span>
                <span className="sidebar-text">Archive</span>
            </div>
            <div className="sidebar-item">
                <span className="material-symbols-outlined hover">delete</span>
                <span className="sidebar-text">Trash</span>
            </div>
        </div>
    );
}

export default Sidebar;
