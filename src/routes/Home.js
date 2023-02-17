import React from 'react';
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import QuotesComponent from "../components/QuotesComponent";
import {ScrollToTop} from "../components/ScrollToTop";

const Home = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <Navbar/>
            <HomeComponent/>
            <QuotesComponent/>
            <Footer/>
        </div>
    );
};

export default Home;