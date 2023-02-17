import React from 'react';
import Budget from "./Budget";
import './BudgetManagerStyle.css';
import Remaining from "./Remaining";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";

const BudgetManager = () => {
    return (
        <div className="outer-dv">
            <br/><br/><br/><br/>
            <div className="budget-cont">

                <div className="row-mt3">
                    <div className="this-month">
                        <h3 className="mt-3">This month</h3>
                        <div className="col-m">
                            <Budget/>
                        </div>
                        <div className="col-m">
                            <Remaining/>
                        </div>
                        <div className="col-m">
                            <ExpenseTotal/>
                        </div>
                    </div>
                </div>


                <div className="row-mt3">
                    <div className="exp-list">
                        <h3 className="mt-3">Expenses</h3>
                        <div className="col-sm">
                            <ExpenseList/>
                        </div>
                    </div>
                </div>


                <div className="row-mt3">
                    <div className="add-exp">
                        <h3 className="mt-3">Add Expense</h3>
                        <div className="col-sm">
                            <AddExpense/>
                        </div>
                    </div>
                </div>

            </div>
            <br/><br/>
        </div>
    );
};

export default BudgetManager;