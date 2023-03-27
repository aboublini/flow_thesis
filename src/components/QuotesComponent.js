import React from 'react';
import './QuotesComponentStyle.css'

const QuotesComponent = () => {
    // Quotes that will be appearing
    const quotes = [
        {
            id: 1,
            text: "Everything you can imagine is real.",
            who: "Pablo Picasso"
        },
        {
            id: 2,
            text: "Don’t let yesterday take up too much of today.",
            who: "Will Rogers"
        },
        {
            id: 3,
            text: "Strive not to be a success, but rather to be of value.",
            who: "Albert Einstein"
        },
        {
            id: 4,
            text: "The way to get started is to quit talking and begin doing.",
            who: "Walt Disney"
        },
        {
            id: 5,
            text: "When you change your thoughts, remember to also change your world.",
            who: "Norman Vincent Peale"
        },
        {
            id: 6,
            text: "To know how much there is to know is the beginning of learning to live.",
            who: "Dorothy West"
        },
    ];

    // Render quotes randomly
    const randomNum = Math.floor(Math.random() * 6) + 1;
    let quoteText;
    let quoteWriter;

    for (let element of quotes) {
        if (randomNum === element.id) {
            quoteText = element.text;
            quoteWriter = element.who;
        }
    }

    return (
        <div className="quotes">
            <p className="quote-title">Quote we love:</p>
            <br/>
            <p className="quote-text">“{quoteText}”</p>
            <br/>
            <p className="quote-who">- {quoteWriter}</p>
        </div>
    );
};

export default QuotesComponent;