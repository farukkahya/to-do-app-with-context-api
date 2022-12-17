/* ----- Librarys ----- */
import React from "react";
/* ----- Components ----- */
import { useTodos } from "../../../Contexts/TodoContext";
import Item from "./Item";

let filtered = null;

function List() {
  const { todos, filter } = useTodos(); /* The values I access from context. */
  filtered = todos;

  if (filter !== "all") {
    filtered = todos.filter(todo => filter === 'active' ? todo.completed === false : todo.completed === true);
  } /* The if check I created to detect the active filter. */

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default List;
