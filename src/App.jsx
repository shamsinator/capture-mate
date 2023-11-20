import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./components/Popup";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
