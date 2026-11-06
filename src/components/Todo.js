
import React from "react";

function Todo({ tasks, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <li key={index} className="todo-item">
          <span>{task}</span>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
