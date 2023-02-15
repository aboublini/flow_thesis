import React from 'react';
import { RiDeleteBin7Line } from "react-icons/ri"


const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span className="saved-txt">{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <RiDeleteBin7Line
                    className="delete-icon"
                    size="1.3em"
                    onClick={() => handleDeleteNote(id)}
                />
            </div>
        </div>
    );
};

export default Note;