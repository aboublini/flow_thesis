import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri"

const ExpenseItem = (props) => {
    return (
        <li className="list-row">
            {props.name}
            <div className="list-cont">
                <span className="">
                    {props.cost}€
                    {"  "}
                </span>
                <RiDeleteBin7Line
                    className="delete-icon"
                    size="1.5em"
                />
            </div>
        </li>
    );
}

export default ExpenseItem;