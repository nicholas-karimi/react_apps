const Task = props => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? 'green' : 'white' }}
    >
      <ul>
        <li>{props.taskName}</li>
        <button onClick={() => props.deleteTask(props.id)}>Delete ❌ </button>
        <button onClick={() => props.completeTask(props.id)}>
          Complete ✅
        </button>
      </ul>
    </div>
  );
};

export default Task;
