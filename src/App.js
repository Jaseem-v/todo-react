import React, { useState, useEffect } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoCompleted from './components/TodoCompleted'
import TodoDelete from './components/TodoDelete'
import moment from "moment";

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [deleteData, setDeleteData] = useState([])
  useEffect(() => {
    getLocalStorage();
    // saveLocalStorage();

  }, [])
  useEffect(() => {
    saveLocalStorage();
  }, [todos])

  // function components
  const inputHandler = (e) => {
    setInputText(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setTodos([...todos, { text: inputText, status: false, id: Date.now(), time: moment().format("LLLL") }])
    setInputText("")
  }

  console.log(todos[0]);

  const saveLocalStorage = () => {
    localStorage.setItem("deleteData", JSON.stringify(deleteData))
    localStorage.setItem("todos", JSON.stringify(todos))

  }
  const getLocalStorage = () => {
    if (localStorage.getItem("deleteData") === null) {
      localStorage.setItem("deleteData", JSON.stringify([]))
    } else {
      let localStorageDelete = JSON.parse(localStorage.getItem("deleteData"))
      setDeleteData(localStorageDelete);
    }


    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let ocalStorageTodo = JSON.parse(localStorage.getItem("todos"))
      setTodos(ocalStorageTodo);
    }
  }

  const clear =()=>{
    window.localStorage.clear();
    window.location.reload();
  }

  // ------------------------
  return (
    <div className="total">
      <div className="app-container" id="taskList">
        <h1 className="app-header">TO DO LIST</h1>
        <div className="add-task">
          <input value={inputText} onChange={inputHandler} type="text" autocomplete="off" placeholder="Add New Task" className="task-input" />
          <input onClick={submitHandler} type="submit" value="" className="submit-task" title="Add Task" />
        </div>
        <ul classname="task-list">
          {
            todos.map((todo) => {
              if (todo.text !== "") {
                return (
                  <Todo
                    todo={todo}
                    todos={todos}
                    key={todo.id}
                    setTodos={setTodos}
                    deleteData={deleteData}
                    setDeleteData={setDeleteData} />

                )
              }
              return null
            }
            )
          }
        </ul>
      </div>

      {/* {completed-data  --------------------------------} */}
      <div className="app-container complted-div" id="taskList">
        <h1 className="app-header">Completed</h1>
        <ul classname="task-list">
          <div>
            {
              todos.map((todo) => {
                if (todo.status) {

                  return (
                    <TodoCompleted
                      todos={todos}
                      key={todo.id}
                      todo={todo}
                      setTodos={setTodos} />

                  )
                }
                return null
              })
            }
          </div>
        </ul>
      </div>

      {/* {Deleted data---------------------------------} */}
      <div className="app-container deleted-div" id="taskList">
        <h1 className="app-header">Deleted</h1>
        <ul classname="task-list">
          <div>
            {
              deleteData.map((todo) => {
                if (todo.text !== "") {
                  return (
                    <TodoDelete
                      todos={todos}
                      setTodos={setTodos}
                      key={todo.id}
                      todo={todo}
                      deleteData={deleteData}
                      setDeleteData={setDeleteData}
                    />
                  )
                }
                return null
              }
              )
            }

          </div>
        </ul>
      </div>
      {/* {-------------------Deleted data---------------------------------} */}
      <div className="clear">
        <button className="clear-btn" onClick={clear}> all clear</button>
      </div>
    </div >
  )
}

export default App
