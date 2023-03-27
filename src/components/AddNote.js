import React, {useState} from 'react';
import Swal from "sweetalert2";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => { // event is what the user has typed (the note)
        if (characterLimit - event.target.value.length >= 0) { // Handle character limit (user can't type more than the limit number)
            setNoteText(event.target.value);
        }
    }

    // What happens if user presses save
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) { // If note text isn't empty
            handleAddNote(noteText);
            setNoteText(""); // Empty note text
        } else {
            // Prevent user from adding an empty note to notes list
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "You can't add an empty note!"
                });
        }
    }

    return(<div className="note new">
        <textarea
            className="txt-area"
            rows="8"
            cols="10"
            placeholder="Type to add a new note..."
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className="save" onClick={handleSaveClick}>+</button>
        </div>
    </div>);
}

export default AddNote;