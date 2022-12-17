/* ----- Librarys ----- */
import React from "react";
/* ----- Context ----- */
import { useTodos } from "../../../Contexts/TodoContext";

function Item({ todo }) {
  const { toggleTodo, destroyTodo } = useTodos();

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={()=>destroyTodo(todo.id)}></button>
      </div>
    </li>
  );
}

export default Item;
