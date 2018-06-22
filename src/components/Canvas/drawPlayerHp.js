export default function drawPlayerHp(ctx, hp) {
  const destX = 20;
  const destY = 20;
  ctx.fillStyle = 'blue';
  ctx.textBaseline = 'top';
  ctx.fillText(hp, destX, destY);
}
