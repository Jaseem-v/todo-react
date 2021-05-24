import React from 'react'


function Todo({ todo, setTodos, todos, setDeleteData, deleteData }) {
    const deleteHandler = () => {
        setDeleteData([...deleteData, todo])
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const checkBox = (e) => {
        setTodos(todos.filter(el => {
            if (el.id === todo.id) {
                todo.status = e.target.checked
            }
            return todo
        }))

    }


    return (
        <div>
            <li className="task-list-item" v-for="task in tasks">
                <label className="task-list-item-label">
                    {todo.status ? (
                        <input type="checkbox" onClick={checkBox} checked />

                    ) : (
                            <input type="checkbox" onClick={checkBox} />

                        )}
                    <span className={`${todo.status ? 'completed' : ''}`}>{todo.text}</span>
                </label>
                <span onClick={deleteHandler} className="delete-btn" title="Delete Task"></span>
            </li>
        </div>
    )
}

export default Todo
