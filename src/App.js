import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./styles/styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}

export default App;
