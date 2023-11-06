import React, { useEffect, useState } from "react";
import "./App.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incomplete":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <>
      <div class="container">
        <h1>Todo List</h1>
        <div class="input-container">
          <input
            class="todo-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button class="add-button" onClick={addTodo}>
            <i class="fa fa-plus-circle"></i>
          </button>
        </div>
        {/* <div class="filters">
          <div class="filter" data-filter="completed">
            Complete
          </div>
          <div class="filter" data-filter="pending">
            Incomplete
          </div>
          <div class="delete-all">Delete All</div>
        </div> */}
        <label>
          Show:
          <select
            class="main-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </label>
        <div class="todos-container">
          <ul class="todos">
            {filterTodos().map((todo, index) => (
              <li key={index}>
                <span
                  class="text"
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  onClick={() => toggleTodo(index)}
                >
                  {todo.text}
                </span>
                <button class="delete-btn" onClick={() => removeTodo(index)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
