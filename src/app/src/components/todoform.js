// TodoForm.js
import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(todo);
    setTodo("");
  };

  return (
    <div className="todo-form-container">
      <h1 className="todo-form-title">Create a ToDo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo" className="todo-input-title">
            ToDo:{" "}
          </label>
          <input
            type="text"
            id="todo"
            className="todo-input"
            value={todo}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <button type="submit" className="todo-button">
            Add ToDo!
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
