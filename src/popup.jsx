import React from "react";
import { render } from "react-dom";
import "./styles/main.scss";

const Popup = () => {
  return (
    <div className="popup">
      <h1>Title!</h1>
      <div>Hello World!</div>
    </div>
  );
};

// Render the Popup component
render(<Popup />, document.getElementById("react-target"));
