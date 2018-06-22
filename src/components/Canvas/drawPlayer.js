export default function drawPlayer(ctx, action, sprites) {
  const scale = 2;
  const srcX = 0;
  const srcY = 0;
  const srcW = 16;
  const srcH = 79;
  const destX = 60;
  const destY = 130;
  const destW = srcW * scale;
  const destH = srcH * scale;

  ctx.drawImage(sprites.player, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
}
