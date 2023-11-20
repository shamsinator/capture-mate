import React, { useRef, useState } from "react";
import { drawCrosshairs, drawOverlay } from "../utils/canvas";

const ScreenshotComponent = () => {
  console.log("1.START - SCREENSHOTCOMPONENT");
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: null, y: null });
  const [end, setEnd] = useState({ x: null, y: null });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setEnd({ x: e.clientX, y: e.clientY });
      drawCrosshairs(canvasRef, start.x, start.y, e.clientX, e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    drawOverlay(canvasRef, {
      x1: Math.min(start.x, end.x),
      y1: Math.min(start.y, end.y),
      x2: Math.max(start.x, end.x),
      y2: Math.max(start.y, end.y),
    });
  };

  const screenshotStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
  };

  const overlayStyle = {
    ...screenshotStyle,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  };

  const crosshairsStyle = {
    position: "absolute",
    left: `${Math.min(start.x, end.x)}px`,
    top: `${Math.min(start.y, end.y)}px`,
    width: `${Math.abs(start.x - end.x)}px`,
    height: `${Math.abs(start.y - end.y)}px`,
    border: "1px solid white",
    pointerEvents: "none",
    zIndex: 2,
  };

  return (
    <div
      style={{ position: "relative", width: "100%", height: "100%" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <canvas
        ref={canvasRef}
        style={screenshotStyle}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      {isDragging ? (
        <>
          <div style={overlayStyle} />
          <div style={crosshairsStyle} />
        </>
      ) : null}
    </div>
  );
};

export default ScreenshotComponent;
