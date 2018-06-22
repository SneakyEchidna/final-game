export default function drawPlayer(ctx, action, sprites) {
  const scale = 2;
  const srcX = 0;
  const srcY = 0;
  const srcW = 16;
  const srcH = 24;
  const destX = 60;
  const destY = 130;
  const offset = 5;
  const heroPoses = {
    idle: 0,
    ready: 1,
    ready1: 2,
    cast: 3,
    hit: 4,
    lowHp: 5,
  };
  const spriteX = srcX + (offset + srcW) * heroPoses[action];
  const destW = srcW * scale;
  const destH = srcH * scale;

  ctx.drawImage(sprites.player, spriteX, srcY, srcW, srcH, destX, destY, destW, destH);
}
