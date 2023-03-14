import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList";
import './TakeNotesStyle.css';
import {nanoid} from "nanoid";

const TakeNotesComponent = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Everyone has the right to freedom of thought, " +
                "conscience and religion; this right includes " +
                "freedom to change his religion or belief, " +
                "and freedom.",
            date: "Wed Feb 15 2023"
        },
        {
            id: nanoid(),
            text: "All people have the right to freedom of" +
                " opinion and expression; this right includes " +
                "freedom to hold opinions without interference.",
            date: "Wed Feb 15 2023"
        },
    ]);

    // Retrieve notes when page loads
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

        if (savedNotes){
            setNotes(savedNotes);
        }
    },[])

    // Save notes to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes))
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toDateString()
        }
        const newNotes = [...notes, newNote]; // new array with old notes and new note
        setNotes(newNotes);
    }

    const deleteNote = (id) => {

        const text = "Are you sure that you want to delete this note?";

        if (window.confirm(text) === true) {
            // Array with the rest of the notes
            const newNotes = notes.filter((note) => note.id !== id);

            // Update notes
            setNotes(newNotes);
        }

    }

    return (
        <div className="out">
            <br/><br/><br/><br/>
            <div className="tn-container">
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
            <br/><br/>
        </div>
    );
};

export default TakeNotesComponent;