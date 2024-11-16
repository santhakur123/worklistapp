import React from 'react';

const Item = ({ task, deleteTask, toggleTaskCompletion, setTaskPriority }) => {
  return (
    <div className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.title)}
      />
      <span>{task.title}</span>
      <select
        value={task.priority}
        onChange={(e) => setTaskPriority(task.title, e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={() => deleteTask(task.title)}>Delete</button>
    </div>
  );
};

export default Item;
