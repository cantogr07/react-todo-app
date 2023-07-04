import React from 'react'
import { useState } from 'react'

function NewTodoForm({ addTodo }) {
   

    const [newItem, setNewItem] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        if (newItem === "") return

        addTodo(newItem)

        setNewItem("") // Clear the input when you add a new todo
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <label htmlFor="item">New Item</label>
            <input id="item" type="text" value={newItem} onChange={e => setNewItem(e.target.value)} />
            <button className="btn">Add</button>
        </form>
    )
}

export default NewTodoForm