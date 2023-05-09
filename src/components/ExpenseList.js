import React from 'react';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, handleDeleteExpense }) => {
    return (
        <ul className="list-group">
            <div className="sort-todos">
                {expenses.map(((expense) => (
                    <ExpenseItem
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                        handleDeleteExpense={handleDeleteExpense}
                    />
                ))) }
            </div>
        </ul>
    );
};

export default ExpenseList;