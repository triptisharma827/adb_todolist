import React, { useState, useEffect } from "react";
import "../App.css"; // Import a CSS file for styling

function TodoList({ todos }) {
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const savedCompletedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setCompletedTodos(savedCompletedTodos);
  }, []);

  const handleTodoClick = (index) => {
    const updatedCompletedTodos = [...completedTodos];
    if (updatedCompletedTodos.includes(index)) {
      updatedCompletedTodos.splice(updatedCompletedTodos.indexOf(index), 1);
    } else {
      updatedCompletedTodos.push(index);
    }

    // Update the state and save to local storage
    setCompletedTodos(updatedCompletedTodos);
    localStorage.setItem(
      "completedTodos",
      JSON.stringify(updatedCompletedTodos)
    );
  };

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">List of TODOs</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-item todo-color-${index % 4} ${
              completedTodos.includes(index) ? "completed" : ""
            }`}
            onClick={() => handleTodoClick(index)} 
          >
            {completedTodos.includes(index) ? "✓ " : ""} {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
