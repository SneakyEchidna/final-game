import drawPlayer from './drawPlayer';
import drawEnemy from './drawEnemy';
import drawBackground from './drawBackground';

function drawCanvas(ctx, loadedSprites, backgroundCoordinates, heroAction) {
  ctx.fillStyle = 'blue';
  ctx.imageSmoothingEnabled = false;
  loadedSprites.background.onload = () => {
    drawBackground(ctx, loadedSprites, backgroundCoordinates);
    drawPlayer(ctx, heroAction, loadedSprites);
    drawEnemy(ctx);
  };
}
export default drawCanvas;
