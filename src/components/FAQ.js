import React, {useState} from 'react';
import './FAQStyle.css'

function FAQ() {
    const data = [
        {
            question: "What exactly is flow?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How to add an item in my to-do list?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How to delete an item from my to-do list?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How to add an expense in flow's budget manager?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How to remove an expense from flow's budget manager?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "What do the graphs depict in flow's budget manager?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How do I take notes?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
        },
        {
            question: "How to delete a note?",
            answer: "Everyone has the right to freedom of thought, conscience " +
                "and religion; this right includes freedom to change his religion or" +
                " belief, and freedom."
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
                                <span classname="symbol">{selected === i ? "▲" : "▼"}</span>
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