import drawPlayer from './drawPlayer';
import drawEnemy from './drawEnemy';
import drawBackground from './drawBackground';

function drawCanvas(ctx, loadedSprites, backgroundCoordinates) {
  ctx.fillStyle = 'blue';
  ctx.imageSmoothingEnabled = false;
  loadedSprites.background.onload = () => {
    drawBackground(ctx, loadedSprites, backgroundCoordinates);
    drawPlayer(ctx);
    drawEnemy(ctx);
  };
}
export default drawCanvas;
