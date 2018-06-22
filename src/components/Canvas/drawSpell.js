export default function drawSpell(ctx, damageType, spellFrame, sprites) {
  if (spellFrame === null) {
    return;
  }

  const scale = 2;
  const srcX = 0;
  const srcY = 0;
  const srcW = 48;
  const srcH = 62;
  const destH = srcH * scale;
  const destW = srcW * scale;
  const destX = 370;
  const destY = 85;
  const offSet = 64;

  const frame = spellFrame;
  const sprite = offSet * frame;

  ctx.drawImage(sprites[damageType], srcX + sprite, srcY, srcW, srcH, destX, destY, destW, destH);
}
