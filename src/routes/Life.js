import React from 'react';
import Footer from "../components/Footer";
import LifeComponent from "../components/LifeComponent";
import Navbar from "../components/Navbar";
import BudgetManager from "../components/BudgetManager";
import {ScrollToTop} from "../components/ScrollToTop";

const Life = () => {
    ScrollToTop(0,0);
    return (
        <div>
            <Navbar/>
            <LifeComponent/>
            <BudgetManager/>
            <Footer/>
        </div>
    );
};

export default Life;