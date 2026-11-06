import React, { useState } from "react";
import Todo from "./Todo";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const handleAddTask = () => {
    if (inputTask.trim() === "") return;
    setTasks([...tasks, inputTask]);
    setInputTask("");
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Todo</button>
      </div>
      <Todo tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
