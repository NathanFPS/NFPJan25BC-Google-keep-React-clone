import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ toggleNotes, toggleArchive }) {
    const [isArchiveActive, setIsArchiveActive] = useState(false); 

    const handleLightbulbClick = () => {
        setIsArchiveActive(false);
        toggleNotes(true);
    };

    const handleArchiveClick = () => {
        setIsArchiveActive(true);
        toggleArchive(true);
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
