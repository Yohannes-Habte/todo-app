import React, { useState } from "react";
import "./App.scss";

const App = () => {
  // const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, task: "Sport", status: true },
    { id: 2, task: "Reading", status: true },
    { id: 3, task: "Breakfast", status: true },
    { id: 4, task: "Coding", status: false },
    { id: 5, task: "Project", status: false },
    { id: 6, task: "Meeting", status: false },
  ]);

  // Pending and completed tasks
  const pendingTasks = todos.filter((todo) => todo.status === false);
  const completedtasks = todos.filter((todo) => todo.status !== false);

  // update current todo
  // const updateTodo = (event) => {
  //   setCurrentTodo(event.target.input);
  // };

  // Function to add new todo
  const addNewTodo = ( event ) => {
    if (event.target.task.value.trim().length > 0) {
      event.preventDefault();

      let newTodo = {
        id: todos.length + 1,
        task: event.target.task.value,
        status: false,
      };

      setTodos([ ...todos, newTodo ]);
      event.target.reset();
    } else {
      alert( "Please type the todo task in the input field!" )
    }
  };

  // Function to transfer tasks from pending to completed tasks and vise versa
  const TransferringTodoTasks = (id) => {
    let tranferTask = todos.map(todo => {
      if(todo.id === id) {
        todo.status = !todo.status;
        return todo;
      } else {
        return todo;
      }
    })
    setTodos(tranferTask);
  };

  // Function to delete todo task
  const deletTodoTask = (id) => {
    let deleteTask = todos.filter((todo) => todo.id !== id);
    setTodos(deleteTask);
  };

  return (
    <section className="todos-container">
      <h1 className="title"> Todo App </h1>

      <form onSubmit={addNewTodo} className="form">
        <input
          className="input"
          type="text"
          name="task"
          // value={currentTodo}
          //onChange={updateTodo}
          placeholder=" Add New Todo List"
        />
        <div className="button">
         <button className="btn">Add Task</button>
        </div>
      </form>

      <article className="todos">
        <h2 className="heading">Pending Todo Tasks</h2>
        <ol className="unordered-lists">
          {pendingTasks.map((todo) => {
            return ( 
              <li id={todo.id} className="list-of-tasks"> 
                {todo.task}
                <div className="delete-tranfer-Task">
                  <span onClick={() => TransferringTodoTasks(todo.id)}>⬇️</span>
                  <span onClick={() => deletTodoTask(todo.id)} className="delete">×</span>
                </div> 
            </li> 
            );
          })}
        </ol>
      </article>

      <article className="todos">
        <h2 className="heading">Completed Todo Tasks</h2>
        <ul className="unordered-lists">
          {completedtasks.map((todo) => {
            return ( 
              <li id={todo.id} className="list-of-tasks"> 
                {todo.task}
                <div className="delete-tranfer-Task">
                  <span onClick={() => TransferringTodoTasks(todo.id)}>⬆️</span>
                  <span onClick={() => deletTodoTask(todo.id)} className="delete">×</span>
                </div> 
            </li> 
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default App;
