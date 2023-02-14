import React from 'react';
import Footer from "../components/Footer";
import DailyComponent from "../components/DailyComponent";
import Navbar from "../components/Navbar";
import TodoComponent from "../components/TodoComponent";

const DailyGoals = () => {
    return (
        <div>
            <Navbar/>
            <DailyComponent/>
            <TodoComponent/>
            <Footer/>
        </div>
    );
};

export default DailyGoals;