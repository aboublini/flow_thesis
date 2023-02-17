import React from 'react';

const Remaining = ({ remain }) => {
    return (
        <div className="alert alert-success">
            <span>Remaining:</span>
            <span>{remain}€</span>
        </div>
    );
};

export default Remaining;