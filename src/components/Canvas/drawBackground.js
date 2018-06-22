export default function drawBackground(ctx, sprites, { col, row }) {
  const scale = 2;
  const startSrcX = 5;
  const startSrcY = 5;
  const srcW = 255;
  const srcH = 135;
  const destX = 0;
  const destY = 0;
  const destW = srcW * scale;
  const destH = srcH * scale;
  const offSet = 5;

  const frameX = startSrcX + (offSet + srcW) * col;
  const frameY = startSrcY + (offSet + srcH) * row;

  ctx.drawImage(sprites.background, frameX, frameY, srcW, srcH, destX, destY, destW, destH);
}
