import React from 'react';
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";
import QuotesComponent from "../components/QuotesComponent";

const Home = () => {
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