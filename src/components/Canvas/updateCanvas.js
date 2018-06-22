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
  ctx.imageSmoothingEnabled = false;

  drawBackground(ctx, sprites, backgroundCoordinates);
  drawPlayer(ctx, heroAction, sprites);
  drawPlayerHp(ctx, playerHp);
  drawEnemy(ctx, sprites);
  drawSpell(ctx, damageType, spellFrame, sprites);
  drawEnemyHp(ctx, enemyHp);
}
export default updateCanvas;
