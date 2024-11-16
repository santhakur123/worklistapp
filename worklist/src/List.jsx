import React from 'react';
import Item from './Item.jsx';

const List = ({ tasks, deleteTask, toggleTaskCompletion, setTaskPriority }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Item
          key={index}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          setTaskPriority={setTaskPriority}
        />
      ))}
    </div>
  );
};

export default List;