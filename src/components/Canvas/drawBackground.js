export default function drawBackground(ctx, sprites, { col, row }) {
  const startSrcX = 5;
  const startSrcY = 5;
  const srcW = 255;
  const srcH = 135;
  const destX = 0;
  const destY = 0;
  const destW = 520;
  const destH = 270;

  const offSetX = 5;
  const offSetY = 5;
  const frameX = startSrcX + (offSetX + srcW) * col;
  const frameY = startSrcY + (offSetY + srcH) * row;

  // const background = new Image();
  // background.src = `${process.env.PUBLIC_URL}/backgrounds.png`;

  // ctx.drawImage(background, 5, 0, 255, 140, 0, 0, 520, 240);
  ctx.drawImage(sprites.background, frameX, frameY, srcW, srcH, destX, destY, destW, destH);
}
