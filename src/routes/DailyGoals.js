import React from 'react';
import Footer from "../components/Footer";
import DailyComponent from "../components/DailyComponent";
import Navbar from "../components/Navbar";
import TodoComponent from "../components/TodoComponent";
import {ScrollToTop} from "../components/ScrollToTop";

const DailyGoals = () => {
    ScrollToTop(0,0);
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