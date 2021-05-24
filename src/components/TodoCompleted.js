import React from 'react'

function TodoCompleted({ todo, setTodos, todos }) {

    return (
        <div>
            <li className="task-list-item" v-for="task in tasks">
                <label className="task-list-item-label">
                    <div className="checkbox-cmplt">
                        <input type="checkbox" checked  />
                        <span>{todo.text}</span>
                    </div>
                </label>
                <span className="date" title="Delete Task">{todo.time}</span>
            </li>
        </div>
    )
}

export default TodoCompleted
