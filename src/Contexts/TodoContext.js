import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext(); /* context created */

export const TodoContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all"); /* The state created for filtering. Initially 'all' is assigned. */
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "Learn HTML",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Learn CSS",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Learn JavaScript",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Learn React",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "Learn Redux",
      completed: false,
    },
  ]); /* The state is created for todos and 5 elements are defined by default. */


  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: uuidv4(), completed: false, text }]);
  }; /* The function I created for adding todo. */

  const toggleTodo = (id) => {
    const clonedTodos = [...todos];
    const index = clonedTodos.findIndex((todo) => todo.id === id);
    const item = todos[index];
    item.completed = !item.completed;
    setTodos(clonedTodos);
  }; /* The function I created for The function I created to mark a todo as complete. (for checkbox)*/

  const destroyTodo = (id) => {
    const clonedTodos = [...todos];
    const index = clonedTodos.findIndex((todo) => todo.id === id);
    clonedTodos.splice(index, 1);
    setTodos(clonedTodos); 
  }; /* The function I created for destroy a todo. (for X button) */

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter,
  }; /* The values I want to reach from the components with the context. */

  return (
    <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error(`useTodos must be used within a TodoContextProvider`);
  } /* The if control I created to detect misuse and point it out to the user. */

  return context;
}; /* The hook I created to make context easier to use. */
