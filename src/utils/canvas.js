/**
 * Draws crosshairs on the canvas at the given coordinates.
 *
 * @param {CanvasRenderingContext2D} ctx The canvas context to draw on.
 * @param {number} startX The x-coordinate of the start point.
 * @param {number} startY The y-coordinate of the start point.
 * @param {number} endX The x-coordinate of the end point.
 * @param {number} endY The y-coordinate of the end point.
 */
export const drawCrosshairs = (ctx, startX, startY, endX, endY) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.save();

  ctx.beginPath();
  ctx.moveTo(startX, 0);
  ctx.lineTo(startX, ctx.canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, startY);
  ctx.lineTo(ctx.canvas.width, startY);
  ctx.stroke();

  ctx.restore();
};

/**
 * Draws an overlay on the canvas that covers the selected area.
 *
 * @param {CanvasRenderingContext2D} ctx The canvas context to draw on.
 * @param {number} x1 The x-coordinate of the top-left corner.
 * @param {number} y1 The y-coordinate of the top-left corner.
 * @param {number} x2 The x-coordinate of the bottom-right corner.
 * @param {number} y2 The y-coordinate of the bottom-right corner.
 */
export const drawOverlay = (ctx, x1, y1, x2, y2) => {
  const width = x2 - x1;
  const height = y2 - y1;

  ctx.save();

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillRect(x1, y1, width, height);

  ctx.restore();
};
