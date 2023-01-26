import React from 'react';
import './QuotesComponentStyle.css'

const QuotesComponent = () => {
    return (
        <div className="quotes">
            <p className="quote-title">Quote of the day:</p>
            <br/>
            <p className="quote-text">“Everything you can imagine is real.”</p>
            <br/>
            <p className="quote-who">- Pablo Picasso</p>
        </div>
    );
};

export default QuotesComponent;