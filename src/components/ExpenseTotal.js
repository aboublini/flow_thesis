import React from 'react';

const ExpenseTotal = ({ total }) => {

    return (
        <div className="alert alert-primary">
            <span>Spent so far:</span>
            <span>{total}€</span>
        </div>
    );
};

export default ExpenseTotal;