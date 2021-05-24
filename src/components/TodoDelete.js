import React from 'react'



function TodoDelete({ todo, setTodos, todos, deleteData, setDeleteData }) {
    const getDeleteData = () => {
        setTodos([...todos, todo])
        setDeleteData(deleteData.filter(el => el.id !== todo.id))

    }
    return (
        <div>
            <li className="task-list-item" v-for="task in tasks">
                <label className="task-list-item-label">
                    {todo.status ? (
                        <input type="checkbox"  checked />

                    ) : (
                            <input type="checkbox"  />

                        )}
                    <span>{todo.text}</span>
                </label>
                <span className="date" title="Delete Task" >{todo.time}</span>
                <button onClick={getDeleteData}></button>

            </li>
        </div>
    )
}

export default TodoDelete
