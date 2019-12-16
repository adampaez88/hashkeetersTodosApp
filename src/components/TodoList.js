import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props){

    const createTodos = props.todos.map((todo, i) => ( 
        <li key={i}><TodoItem  todo={todo}/></li>
    ))

    return (
        <div className="container">
            <ul className="list">
                {createTodos}
            </ul>
        </div>
    )
}