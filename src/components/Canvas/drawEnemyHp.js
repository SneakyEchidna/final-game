export default function drawEnemyHp(ctx, hp) {
  const destX = 400;
  const destY = 20;
  ctx.font = '40px pixel';
  ctx.fillStyle = 'blue';
  ctx.textBaseline = 'top';
  ctx.fillText(hp, destX, destY);
}
