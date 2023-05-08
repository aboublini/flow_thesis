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

    // Initial state for font family
    const fontFamily = useState("Raleway");

    const changeFont = (current) => {
        // Confirm on note deletion
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            inputOptions: {
                'Fruits': {
                    raleway: 'Raleway',
                    arial: 'Arial Black',
                    flower: 'Inide Flower'
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
                let savedText = document.querySelector('.saved-txt');
                let txtArea = document.querySelector('.txt-area');
                let font = result.value.toString();
                if (font === "raleway"){
                    alert("You chose raleway!");
                } else if (font === "arial") {
                    // alert("You chose arial black!");
                    savedText.style.fontFamily = 'Arial, sans-serif';
                    txtArea.style.fontFamily = 'Arial, sans-serif';
                } else if (font === "flower") {
                    alert("You chose indie flower!");
                }
            }
        });

    }


    // let savedText = document.querySelector('.saved-txt');
    // let txtArea = document.querySelector('.txt-area');
    // savedText.style.fontFamily = 'Arial, sans-serif';
    // txtArea.style.fontFamily = 'Arial, sans-serif';

    return (
        <div className="out">
            <br/><br/><br/><br/>
            <div className="tn-container">
                <p onClick={changeFont}>Font Family : {fontFamily}</p>
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