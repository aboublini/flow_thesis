import React from 'react';
import Footer from "../components/Footer";
import DailyComponent from "../components/DailyComponent";
import Navbar from "../components/Navbar";

const DailyGoals = () => {
    return (
        <div>
            <Navbar/>
            <DailyComponent/>
            <Footer/>
        </div>
    );
};

export default DailyGoals;