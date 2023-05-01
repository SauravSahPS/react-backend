import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import AppAddUser from "./AppAddUser.tsx";
import AppUpdate from "./AppUpdate.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppUpdate />
  </React.StrictMode>
);
