import React from 'react';

const AddExpense = () => {
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
                    ></input>
                </div>
                <br/>
                <div className="col-sm">
                    <button type="submit" className="save">
                        +
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpense;