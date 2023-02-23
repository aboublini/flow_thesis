import React, {useEffect, useState} from 'react';
import Budget from "./Budget";
import './BudgetManagerStyle.css';
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import {nanoid} from "nanoid";

const BudgetManager = () => {
    // Initial state for expenses
    const [expenses, setExpenses] = useState([
        {
            id: nanoid(),
            name: "Vacation",
            cost: "300"
        },
        {
            id: nanoid(),
            name: "Super Market",
            cost: "50"
        },
        {
            id: nanoid(),
            name: "Fay's present",
            cost: "50"
        },
    ]);

    // Retrieve expenses when page loads
    useEffect(() => {
        const savedExpenses = JSON.parse(localStorage.getItem('react-expenses-app-data'));

        if (savedExpenses){
            setExpenses(savedExpenses);
        }
    },[])

    // Save expenses to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-expenses-app-data',
            JSON.stringify(expenses))
    }, [expenses]);


    // Function that adds a new expense to expenses list
    const addExpense = (name, price, remaining) => {

        const newExpense = {
            id: nanoid(),
            name: name,
            cost: price,
        }

        if ( name === "" || price === "" ) {
            alert("Expense name or cost missing!");
        } else {
            const newExpenses = [...expenses, newExpense];
            setExpenses(newExpenses);
        }

    }

    // Function that deletes an expense from the expenses list
    const deleteExpense = (id) => {

        const text = "Are you sure that you want to delete this expense?";

        if (window.confirm(text) === true) {
            // Array with the rest of the notes
            const newExpenses = expenses.filter((expense) => expense.id !== id);

            // Update notes
            setExpenses(newExpenses);
        }

    }


    // Initialize budget
    let budget = 2500;

    // Calculating total expenses
    let total = 0;
    for (let element of expenses) {
        total = total + Number(element.cost);
    }

    let remain = budget - total;


    return (
        <div className="outer-dv">
            <br/><br/><br/><br/>
            <div className="budget-cont">

                <div className="row-mt3">
                    <div className="this-month">
                        <h3 className="mt-3">This month</h3>
                        <div className="col-m">
                            <Budget budget={budget}/>
                        </div>
                        <div className="col-m">
                            <Remaining remain={remain}/>
                        </div>
                        <div className="col-m">
                            <ExpenseTotal total={total}/>
                        </div>
                    </div>
                </div>


                <div className="row-mt3">
                    <div className="exp-list">
                        <h3 className="mt-3">Expenses</h3>
                        <div className="col-sm">
                            <ExpenseList
                                expenses={expenses}
                                handleDeleteExpense={deleteExpense}
                            />
                        </div>
                    </div>
                </div>


                <div className="row-mt3">
                    <div className="add-exp">
                        <h3 className="mt-3">Add Expense</h3>
                        <div className="col-sm">
                            <AddExpense
                                handleAddExpense={addExpense}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <br/><br/>
        </div>
    );
};

export default BudgetManager;