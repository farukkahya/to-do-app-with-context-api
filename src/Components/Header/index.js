import React from "react";
import NewTodoForm from "./NewTodoForm";

function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTodoForm /> {/* The component with the textbox */}
    </header>
  );
}

export default Header;
