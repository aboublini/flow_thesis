import React from 'react';

const Budget = ({ handleBudgetChange, budget }) => {

    return (
        <div className="alert alert-secondary">
            <span>Budget:</span>
            <span>{budget}€</span>
        </div>
    );
};

export default Budget;