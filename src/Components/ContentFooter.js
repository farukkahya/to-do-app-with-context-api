import React from "react";
import { useTodos } from "../Contexts/TodoContext";

function ContentFooter() {
  const { todos, setTodos, filter, setFilter } = useTodos(); /* The values I access from context. */
  const completedTodos = todos.filter((todo) => todo.completed === true); /* The arrow function I created to find out the number of todos marked as complete. */
  const clearCompleted = () => setTodos(prev => prev.filter(todo => !todo.completed)); /* The function I created to delete completed todos. */
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length - completedTodos.length} </strong>
        item{todos.length > 1 && "s"} left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => setFilter("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
