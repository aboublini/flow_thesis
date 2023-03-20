import React from 'react';
import Footer from "../components/Footer";
import HelpComponent from "../components/HelpComponent";
import Navbar from "../components/Navbar";
import {ScrollToTop} from "../components/ScrollToTop";
import FAQ from "../components/FAQ";

const Help = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <Navbar/>
            <HelpComponent/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Help;