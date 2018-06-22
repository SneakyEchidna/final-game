import drawPlayer from './drawPlayer';
import drawEnemy from './drawEnemy';
import drawPlayerHp from './drawPlayerHp';
import drawEnemyHp from './drawEnemyHp';
import drawSpell from './drawSpell';
import drawBackground from './drawBackground';

function updateCanvas(
  ctx,
  playerHp,
  enemyHp,
  heroAction,
  damageType,
  spellFrame,
  sprites,
  backgroundCoordinates,
) {
  ctx.font = '40px pixel';
  const player = new Image();
  const background = new Image();
  player.src = `${process.env.PUBLIC_URL}/player.png`;
  background.src = `${process.env.PUBLIC_URL}/backgrounds.png`;

  ctx.drawImage(background, 5, 0, 255, 140, 0, 0, 520, 270);
  drawBackground(ctx, sprites, backgroundCoordinates);
  drawPlayer(ctx, heroAction);
  drawPlayerHp(ctx, playerHp);
  drawEnemy(ctx);
  drawSpell(ctx, damageType, spellFrame, sprites);
  drawEnemyHp(ctx, enemyHp);
}
export default updateCanvas;
