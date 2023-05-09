import React from 'react';
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleFont, fontClass }) => {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                    fontClass={fontClass}
                />
            )}
            <AddNote handleAddNote={handleAddNote} handleFont={handleFont} fontClass={fontClass}/>
        </div>
    );
};

export default NotesList;