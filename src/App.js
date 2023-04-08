import './App.css';
import { useState } from 'react';

import Task from './Task';

function App(props) {
  // track todos
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState('');

  const getNewTask = event => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    // let newTodoList = [...todoList, newTask];
    // convert tasks to objects -> when we delete a task with same name all dont get deleted
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  // delete task
  const deleteTask = task_id => {
    const newTodoList = todoList.filter(task => {
      if (task.id === task_id) {
        // remove task from list
        return false;
      } else {
        return true;
      }
    });
    // console.log('Task Deleted');
    setTodoList(newTodoList);
  };

  // Update Task

  const completeTask = id => {
    setTodoList(
      todoList.map(task => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={getNewTask} />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map(task => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
