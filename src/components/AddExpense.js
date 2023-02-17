import React, {useState} from 'react';

const AddExpense = ({ handleAddExpense }) => {
    // Initial state for two textboxes
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");

    // Setting name and cost values with corresponding user input
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCostChange = (event) => {
        setCost(event.target.value);
    }

    // Call addExpense function when user presses + button
    const handleSaveClick = () => {
        handleAddExpense(name, cost);
        setName("");
        setCost("");
    }

    return (
        <form>
            <div className="row">
                <br/>
                <div className="col-sm">
                    <label for="name">Name: </label>
                    <input required="required"
                           type="text"
                           className="form-control"
                           id="name"
                           placeholder="Expense name..."
                           value={name}
                           onChange={handleNameChange}
                    ></input>
                </div>
                <br/>
                <div className="col-sm">
                    <label for="cost">  Cost:  </label>
                    <input required="required"
                           type="text"
                           className="form-control"
                           id="cost"
                           placeholder="Expense cost..."
                           value={cost}
                           onChange={handleCostChange}
                    ></input>
                </div>
                <br/>
                <div className="col-sm">
                    <button type="submit" className="save" onClick={handleSaveClick}>
                        +
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;