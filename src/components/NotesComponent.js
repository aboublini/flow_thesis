import React from 'react';
import './NotesComponentStyle.css'
import notesImage from '../visual-material/NotesBackround.jpg';


const NotesComponent = () => {

     return (
        <div className="notes-container">

            <img src={notesImage} id="notes-image" alt="notes-background"/>

            <div className="notes-content">
                <div className="notes-title">
                    <h1>All your notes in one place.</h1>
                    <p>Take notes anytime, anywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default NotesComponent;