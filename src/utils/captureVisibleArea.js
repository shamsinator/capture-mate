const captureVisibleArea = () => {
  const saveScreenshot = (canvas) => {
    // Create a link element to save the screenshot
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "screenshot.png";
    document.body.appendChild(link);

    // Programmatically click on the link to save the file
    link.click();
    document.body.removeChild(link);
  };

  const createCanvas = (image) => {
    const img = new Image();
    img.onload = function () {
      // Create a canvas element to draw the screenshot on
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set the size of the canvas to match the size of the screenshot
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the screenshot on the canvas
      ctx.drawImage(img, 0, 0);

      saveScreenshot(canvas);
    };
    img.src = image;
  };

  chrome.tabs.captureVisibleTab(null, { format: "png" }, createCanvas);
};

export default captureVisibleArea;
