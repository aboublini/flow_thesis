import React, {useState} from 'react';
import './FAQStyle.css'
import {Link} from "react-router-dom";
import {RiCheckLine, RiDeleteBin7Line} from "react-icons/ri";
import {FaFont} from "react-icons/fa";

function FAQ() {
    const data = [
        {
            question: "What exactly is flow?",
            answer: "You can think of flow as an all-in-one, productivity web app " +
                "that allows you to manage your personal life via its flexible tools. " +
                "Whether you are currently studying or working, flow is here to take " +
                "your productivity to the next level. With a variety of features, " +
                "such as creating to-do lists, managing money, taking notes etc., " +
                "you can organize information and keep track of everything that " +
                "goes on in your life. Have a lot of things in mind? Don't worry, we've got you!"
        },
        {
            question: "How to add an item to my to-do list?",
            answer: <ol>
                        <li>1.  On the navigation bar, which is located at the top-right of every page, go to "<Link to="/daily" className="lnk">Daily Goals</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" write your to-do in the text area with the placeholder "Write something here".</li>
                        <li>3.	Click on  <button type="submit" className="faqs-plus">+</button>  to add the item to your to-do list.</li>
                     </ol>
        },
        {
            question: "How to remove-delete an item from my to-do list?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top-right of every page, go to "<Link to="/daily" className="lnk">Daily Goals</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" click on the bin icon (<RiDeleteBin7Line/>) at the right of the item that you want to remove.</li>
                        <li>3.	Click on the  <button type="submit" className="faqs-btn">Yes</button>  option in the pop-up window that will appear.
                            In case you changed your mind click on the  <button type="submit" className="faqs-btn">Cancel</button>  option.</li>
                    </ol>
        },
        {
            question: "How to mark an item from my to-do list as done?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top of every page, go to "<Link to="/daily" className="lnk">Daily Goals</Link>".</li>
                        <li>2.	At the left white frame with the title "To-do List" click on the check icon (<RiCheckLine/>) at the right of the item that you want to remove.</li>
                        <li>3.	The line that will appear above your to-do item indicates that it is marked as done.</li>
                    </ol>
        },
        {
            question: "How to add an expense to flow's budget manager?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top-right of every page, go to "<Link to="/life" className="lnk">Budget Manager</Link>".</li>
                        <li>2.	Go to the top-right white frame with the title "Add Expense".</li>
                        <li>3.	Write the expense's name in the text area with the placeholder "Expense name...".</li>
                        <li>4.	Write the expense's numeric cost in the text area with the placeholder "Expense name...".</li>
                        <li>5.	Click on  <button type="submit" className="faqs-plus">+</button> , to add the expense.</li>
                    </ol>
        },
        {
            question: "How to remove-delete an expense from flow's budget manager?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top-right of every page, go to "<Link to="/life" className="lnk">Budget Manager</Link>".</li>
                        <li>2.	Go to the top-middle white frame with the title "Expenses".</li>
                        <li>3.	Click on the bin icon (<RiDeleteBin7Line/>) at the right of the expense that you want to remove.</li>
                        <li>4.	Click on the  <button type="submit" className="faqs-btn">Yes</button>  option in the pop-up window that will appear.
                            In case you changed your mind click on the  <button type="submit" className="faqs-btn">Cancel</button>  option.</li>
                    </ol>
        },
        {
            question: "How to take a note?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top-right of every page, go to "<Link to="/notes" className="lnk">Notes</Link>".</li>
                        <li>2.	Go to the bottom-right white frame that contains the text area with the placeholder "Type to add new note...".</li>
                        <li>3.	Write down your note inside the text area.</li>
                        <li>4.	Click on  <button type="submit" className="faqs-plus">+</button>  , to save your note.</li>
                    </ol>
        },
        {
            question: "How to remove-delete a note from my notes?",
            answer: <ol>
                        <li>1.	On the navigation bar, which is located at the top-right of every page, go to "<Link to="/notes" className="lnk">Notes</Link>".</li>
                        <li>2.	Click on the bin icon (<RiDeleteBin7Line/>) at the at the bottom, right of the note that you want to remove.</li>
                        <li>3.	Click on the  <button type="submit" className="faqs-btn">Yes</button>  option in the pop-up window that will appear.
                            In case you changed your mind click on the  <button type="submit" className="faqs-btn">Cancel</button>  option.</li>
                    </ol>
        },
        {
            question: "How to change the font family of my notes?",
            answer: <ol>
                <li>1.	On the navigation bar, which is located located at the top-right of every page, go to "<Link to="/notes" className="lnk">Notes</Link>".</li>
                <li>2.	Click on the button above the notes section with the indication  <FaFont  size={15} style={{color: '#000'}}/>  and a pop up window will appear.</li>
                <li>3.	Select the font family that you want to apply to your notes from the dropdown menu.</li>
                <li>3.	Click on  <button type="submit" className="faqs-btn">Save</button> in order to apply the font family.
                    In case you changed your mind click on the  <button type="submit" className="faqs-btn">Cancel</button> option.</li>
            </ol>
        },

    ];

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }

        return (
        <div className="faqs">
            <div className="wrapper">
                <div className="accordion">
                    <div className="header-faq">
                        <h1> Didn't find what you were looking for? </h1>
                        <p>Check our FAQs.</p>
                        <br/>
                    </div>
                    <br/>
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <h2>{item.question}</h2>
                                <span>{selected === i ? "▲" : "▼"}</span>
                            </div>
                            <div className={selected === i ? "contnt show" : "contnt"}>{item.answer}</div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default FAQ;