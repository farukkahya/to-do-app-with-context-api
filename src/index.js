/* ----- Librarys ----- */
import React from "react";
import ReactDOM from "react-dom/client";
/* ----- Styles ----- */
import "./index.css";
/* ----- Component ----- */
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); /* Root element */

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
