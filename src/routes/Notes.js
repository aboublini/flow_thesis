import React from 'react';
import Footer from "../components/Footer";
import NotesComponent from "../components/NotesComponent";
import Navbar from "../components/Navbar";

const Notes = () => {
    return (
        <div>
            <Navbar/>
            <NotesComponent/>
            <Footer/>
        </div>
    );
};

export default Notes;