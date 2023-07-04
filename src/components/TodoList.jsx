import React from 'react'
import TodoItem from './TodoItem.jsx'

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && <li>Done for the day!</li>}
            {todos.map(todo => {
                return <TodoItem {...todo}
                    key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            })}
        </ul>
    )
}

export default TodoList