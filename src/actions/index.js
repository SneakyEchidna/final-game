import { TAKE_DAMAGE, GAIN_XP, TOGGLE_SPELLBOOK, DEAL_DAMAGE, OPEN_TRIAL } from './actionTypes';

export const takeDamage = damage => ({
  type: TAKE_DAMAGE,
  payload: damage,
});

export const gainXp = xp => ({
  type: GAIN_XP,
  payload: xp,
});

export const toggleSpellbook = () => ({
  type: TOGGLE_SPELLBOOK,
});

export const dealDamage = (damageType, damage) => ({
  type: DEAL_DAMAGE,
  payload: { damage, damageType },
});

export const openTrial = (damageType, trialType) => ({
  type: OPEN_TRIAL,
  payload: { damageType, trialType },
});
