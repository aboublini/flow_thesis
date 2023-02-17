import React from 'react';
import Footer from "../components/Footer";
import NotesComponent from "../components/NotesComponent";
import Navbar from "../components/Navbar";
import TakeNotesComponent from "../components/TakeNotesComponent";
import {ScrollToTop} from "../components/ScrollToTop";

const Notes = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <Navbar/>
            <NotesComponent/>
            <TakeNotesComponent/>
            <Footer/>
        </div>
    );
};

export default Notes;