import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
    const expenses = [
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
        {
            id: 123,
            name: "Shopping",
            cost: 50
        },
    ];

    return (
        <ul className="list-group">
            {expenses.map(((expense) => (
                <ExpenseItem
                    id={expense.id}
                    name={expense.name}
                    cost={expense.cost}/>
            ))) }
        </ul>
    );
};

export default ExpenseList;