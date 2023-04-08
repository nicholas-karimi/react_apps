import './App.css';
import { useState } from 'react';

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
    };
    setTodoList([...todoList, task]);
  };
  // delete task
  const deleteTask = taskName => {
    const newTodoList = todoList.filter(task => {
      if (task === taskName) {
        // remove task from list
        return false;
      } else {
        return true;
      }
    });
    // console.log('Task Deleted');
    setTodoList(newTodoList);
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
            <div>
              <ul>
                <li>{task}</li>
                <button onClick={() => deleteTask(task)}>X</button>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
