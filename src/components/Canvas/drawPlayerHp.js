export default function drawPlayerHp(ctx, hp) {
  const destX = 20;
  const destY = 20;
  // ctx.font = '40px pixel';
  ctx.fillStyle = 'blue';
  ctx.textBaseline = 'top';
  ctx.fillText(hp, destX, destY);
}
