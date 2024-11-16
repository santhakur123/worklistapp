import React, { useState, useEffect } from 'react';
import Input from './Input.jsx';
import List from './List.jsx';
import Search from './Search.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false, priority: 'medium' }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (title) => {
    const newTasks = tasks.filter(task => task.title !== title);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const toggleTaskCompletion = (title) => {
    const updatedTasks = tasks.map(task =>
      task.title === title ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const setTaskPriority = (title, priority) => {
    const updatedTasks = tasks.map(task =>
      task.title === title ? { ...task, priority } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="App">
      <Input addTask={addTask} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <List
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        setTaskPriority={setTaskPriority}
      />
    </div>
  );
};

export default App;
