import drawPlayer from './drawPlayer';
import drawEnemy from './drawEnemy';

function drawCanvas(ctx, playerHp, enemyHp) {
  const player = new Image();
  const background = new Image();
  ctx.fillStyle = 'blue';
  ctx.imageSmoothingEnabled = false;
  player.src = `${process.env.PUBLIC_URL}/player.png`;
  background.src = `${process.env.PUBLIC_URL}/backgrounds.png`;
  background.onload = () => {
    ctx.drawImage(background, 5, 0, 255, 140, 0, 0, 520, 240);
    drawPlayer(ctx);
    drawEnemy(ctx);
  };
}
export default drawCanvas;
