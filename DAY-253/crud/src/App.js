import "./App.css";
import { useState } from "react";
import React, { Component } from "react";

import {Task} from "./task"
function App() {
  //  variables

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const getTask = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const newList = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    setTodoList([...todoList, newList]);
  };

  const deleteTask = (id) => {
    const newList = todoList.filter((task) => {
      // if(task ===taskName){
      //   return false
      // }
      // else{
      //   return true
      // }

      return task.id !== id;
    });

    setTodoList(newList);
  };


  const completeTask = (id)=>{

    
    setTodoList(
      todoList.map((task)=>{
           if(task.id === id){
            return({...task,completed:true})
           }
           else{
            return task
           }
      })


    )
  }
  return (
    <div className="App">
      <div className="container">
        <div className="addTask">
          <input type="text" onChange={getTask} />
          <button onClick={addTask}>Add Task</button>

        </div>
        <div className="taskList">
          <div className="itemList">
            {todoList.map((task) => {
               return < Task taskName = {task.taskName} id= {task.id} deleteTask = {deleteTask}  completeTask = {completeTask}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
