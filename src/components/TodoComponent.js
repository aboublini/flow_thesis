import React, { useState } from "react";
import './TodoComponentStyle.css'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import CalendarComponent from "./CalendarComponent";

function TodoComponent() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        let id = 1;
        if(todos.length > 0) {
            id = todos[0].id + 1
        }
        let todo = {id: id, text: text, completed: false, important: false}
        let newTodos = [todo, ...todos]
        setTodos(newTodos)
    };

    const removeTodo = (id) => {
        let updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
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

    const importantTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.important = !todo.important
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
                        <h1>Todo List</h1>
                        <TodoForm addTodo={addTodo} />

                        {sortedTodos.map((todo) => {
                            return (
                                <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} importantTodo={importantTodo} todo={todo} key={todo.id}/>
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