import React, { useRef, useState } from "react";
import captureVisibleArea from "../utils/captureVisibleArea";
import ScreenshotComponent from "./Screenshot";

const CaptureTab = () => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  const handleCaptureVisibleArea = () => {
    captureVisibleArea();
  };

  const handleCaptureSelectedArea = () => {
    setShowScreenshot(true);
  };

  return (
    <div>
      <h2>This is Tab1</h2>
      <button onClick={handleCaptureVisibleArea}>Visible Area</button>
      <button onClick={handleCaptureSelectedArea}>Selected Area</button>
      {showScreenshot && <ScreenshotComponent />}
    </div>
  );
};

export default CaptureTab;
