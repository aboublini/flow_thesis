import React, {useEffect, useState} from "react";
import './TodoComponentStyle.css'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import CalendarComponent from "./CalendarComponent";
import {nanoid} from "nanoid";

function TodoComponent() {
    const [todos, setTodos] = useState([
        {
            id: nanoid(),
            text: "Buy groceries",
            completed: false,
            important: false
        },
        {
            id: nanoid(),
            text: "Go to gym",
            completed: false,
            important: false
        },
    ]);

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('react-todo-app-data'));

        if (savedTodos){
            setTodos(savedTodos);
        }
    },[])

    // Save todos to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-todo-app-data',
            JSON.stringify(todos))
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            text: text,
            completed: false,
            important: true
        }

        if (newTodo.text === "") {
            alert("You can't add an empty to do!");
        }
        else {
            const newTodos = [...todos, newTodo]; // new array with old notes and new note
            setTodos(newTodos);
        }

    };

    const removeTodo = (id) => {

        const text = "Are you sure that you want to delete this to-do?";

        if (window.confirm(text) === true) {
            const updatedTodos = [...todos].filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
        }

    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    let sortedTodos = todos.sort((a, b) => b.important - a.important)
    return (
        <div className="out">
            <br/><br/><br/><br/>
            <div className="outer-container">
                <div className="left-content">
                    <div className="todo">
                        <h1>To-do List</h1>
                        <TodoForm
                            todos={todos}
                            addTodo={addTodo}
                        />

                        {sortedTodos.map((todo) => {
                            return (
                                <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className="right-content"><CalendarComponent></CalendarComponent></div>
            </div>
            <br/><br/>
        </div>
    );
}

export default TodoComponent;