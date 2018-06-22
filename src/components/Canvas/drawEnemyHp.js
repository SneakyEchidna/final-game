export default function drawEnemyHp(ctx, hp) {
  const ENEMY_POSITION_X = 400;
  const ENEMY_POSITION_Y = 20;

  const destX = ENEMY_POSITION_X;
  const destY = ENEMY_POSITION_Y;
  ctx.font = '40px pixel';
  ctx.fillStyle = 'blue';
  ctx.textBaseline = 'top';
  ctx.fillText(hp, destX, destY);
}
