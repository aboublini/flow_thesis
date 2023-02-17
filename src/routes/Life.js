import React from 'react';
import Footer from "../components/Footer";
import LifeComponent from "../components/LifeComponent";
import Navbar from "../components/Navbar";
import BudgetManager from "../components/BudgetManager";

const Life = () => {
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