import React from 'react'
import { RiCheckLine } from "react-icons/ri"
import { RiDeleteBin7Line } from "react-icons/ri"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <RiCheckLine className="icon" onClick={() => completeTodo(todo.id)}/>
                <RiDeleteBin7Line className="icon" style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    )
}