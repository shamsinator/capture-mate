import React from "react";
import { render } from "react-dom";

const Popup = () => {
  return (
    <div>
      <h1>Title!</h1>
      <div>Hello World!</div>
    </div>
  );
};

// Render the Popup component
render(<Popup />, document.getElementById("react-target"));
