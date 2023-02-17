import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri"

const ExpenseItem = ({ id, name, cost, handleDeleteExpense}) => {
    return (
        <li className="list-row">
            {name}
            <div className="list-cont">
                <span className="">
                    {cost}€
                    {"  "}
                </span>
                <RiDeleteBin7Line
                    className="delete-icon"
                    size="1.5em"
                    onClick={() => handleDeleteExpense(id)}
                />
            </div>
        </li>
    );
}

export default ExpenseItem;