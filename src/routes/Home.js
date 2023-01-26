import React from 'react';
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeComponent/>
            <Footer/>
        </div>
    );
};

export default Home;