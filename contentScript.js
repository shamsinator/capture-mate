let startX, startY, endX, endY;

function handleMouseDown(e) {
  if (e.ctrlKey) {
    startX = e.pageX;
    startY = e.pageY;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }
}

function handleMouseMove(e) {
  endX = e.pageX;
  endY = e.pageY;
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);
  const left = Math.min(startX, endX);
  const top = Math.min(startY, endY);
  chrome.runtime.sendMessage({ selectedArea: { width, height, left, top } });
}

function handleMouseUp(e) {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
}

document.addEventListener("mousedown", handleMouseDown);
