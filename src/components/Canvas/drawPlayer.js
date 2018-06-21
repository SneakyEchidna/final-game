export default function drawPlayer(ctx) {
  const srcX = 0;
  const srcY = 0;
  const srcW = 16;
  const srcH = 79;
  const destX = 60;
  const destY = 130;
  const destH = 48;
  const destW = 237;

  const player = new Image();
  ctx.imageSmoothingEnabled = false;
  player.src = `${process.env.PUBLIC_URL}/player.png`;
  ctx.drawImage(player, srcX, srcY, srcW, srcH, destX, destY, destH, destW);
}
