import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/todolist";
import TodoForm from "./components/todoform";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:8000/todos/") 
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTodos(data);
        } else {
          
          setTodos(["Learn Docker", "Learn React"]); // Set hardcoded todos
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    // Fetch initial todos
    fetchTodos();
  }, []);

  const handleAddTodo = (newTodo) => {
    fetch("http://localhost:8000/todos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ todo: newTodo })
    })
      .then((response) => response.json())
      .then((data) => {
        // After a successful POST request, fetch the updated todos
        fetchTodos();
        console.log("Todo added:", data);
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <div className="App">
      <TodoList todos={todos} />
      <TodoForm onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
