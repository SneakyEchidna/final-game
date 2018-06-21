export default function drawSpell(ctx, damageType, spellFrame, sprites) {
  if (spellFrame === null) {
    return;
  }
  const srcX = 0;
  const srcY = 0;
  const srcW = 48;
  const srcH = 62;
  const destH = 122;
  const destW = 96;
  const destX = 370;
  const destY = 85;

  const offSet = 64;
  const frame = spellFrame;
  const sprite = offSet * frame;
  const ice = new Image();

  ice.src = `${process.env.PUBLIC_URL}/ice.png`;
  ctx.drawImage(sprites[damageType], srcX + sprite, srcY, srcW, srcH, destX, destY, destW, destH);
}
