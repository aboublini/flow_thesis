import React, {useEffect, useState} from 'react';
import NotesList from "./NotesList";
import './TakeNotesStyle.css';
import {nanoid} from "nanoid";
import Swal from "sweetalert2";

const TakeNotesComponent = () => {

    // Notes initial state
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

        const fontClass = localStorage.getItem("fontClass");
        if (fontClass === "font-nirmala") {
            setFontClass("font-nirmala");
            setFontName("Nirmala UI");
        }
        else if (fontClass === "font-flower") {
            setFontClass("font-flower");
            setFontName("Indie Flower");
        }
        else {
            setFontClass("");
            setFontName("Raleway");
        }
    },[])

    // Save notes to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes))
    }, [notes]);

    // Add note function
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

    // Delete note function
    const deleteNote = (id) => {
        // Confirm on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            title: 'Are you sure that you want to delete this note?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                    // Array with the rest of the notes
                    const newNotes = notes.filter((note) => note.id !== id);

                    // Update notes
                    setNotes(newNotes);
            }
        });

    }

    let [fontClass, setFontClass] = useState("");
    let [fontName, setFontName] = useState("Raleway");

    const changeFont = () => {
        // Confirm on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            inputOptions: {
                'Font Families': {
                    raleway: 'Raleway',
                    nirmala: 'Nirmala UI',
                    flower: 'Indie Flower'
                }
            },
            title: 'Select a font family',
            input: 'select',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                if (result.value.toString() === "raleway") {
                    setFontClass("");
                    setFontName("Raleway");
                    localStorage.setItem("fontClass", "");
                }
                else if (result.value.toString() === "nirmala") {
                    setFontClass("font-nirmala");
                    setFontName("Nirmala UI");
                    localStorage.setItem("fontClass", "font-nirmala");
                }
                else if (result.value.toString() === "flower") {
                    setFontClass("font-flower");
                    setFontName("Indie Flower");
                    localStorage.setItem("fontClass", "font-flower");
                }
                // localStorage.setItem("font-fam", fontClass);
            }
        });
    }

    return (
        <div className="out">
            <br/><br/><br/><br/>
            <div className="tn-container">
                <p onClick={changeFont}>Font Family : {fontName}</p>
                <NotesList
                    notes={notes}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    fontClass={fontClass}
                />
            </div>
            <br/><br/>
        </div>
    );
};

export default TakeNotesComponent;