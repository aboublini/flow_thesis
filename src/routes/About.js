import React from 'react';
import Footer from "../components/Footer";
import AboutComponent from "../components/AboutComponent";
import Navbar from "../components/Navbar";
import {ScrollToTop} from "../components/ScrollToTop";
import AboutInfoComponent from "../components/AboutInfoComponent";

const Notes = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <Navbar/>
            <AboutComponent/>
            <AboutInfoComponent/>
            <Footer/>
        </div>
    );
};

export default Notes;