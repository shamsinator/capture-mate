import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/css/tailwind.css";
import Popup from "./Popup";

function init() {
  let appContainer = document.getElementById("app-container");

  // Create a container div if it doesn't exist
  if (!appContainer) {
    appContainer = document.createElement("div");
    appContainer.id = "app-container";
    document.body.appendChild(appContainer);
  }

  const root = ReactDOM.createRoot(appContainer);
  root.render(
    <React.StrictMode>
      <Popup />
    </React.StrictMode>
  );
}

// Ensure the DOM is ready before initializing
document.addEventListener("DOMContentLoaded", init);
