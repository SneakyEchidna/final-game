import {
  TAKE_DAMAGE,
  GAIN_XP,
  TOGGLE_SPELLBOOK,
  DEAL_DAMAGE,
  OPEN_TRIAL,
  NEXT_SPELL_FRAME,
  CAST_SPELL,
  READY_SPELL,
  SET_BACKGROUND,
} from './actionTypes';

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
  payload: { damageType, damage },
});

export const openTrial = trialType => ({
  type: OPEN_TRIAL,
  payload: { trialType },
});

export const nextSpellFrame = {
  type: NEXT_SPELL_FRAME,
};

export const castSpell = (damageType, damage) => ({
  type: CAST_SPELL,
  payload: { damageType, damage },
});

export const readySpell = damageType => ({
  type: READY_SPELL,
  payload: { damageType },
});

export const setBackground = (row, col) => ({
  type: SET_BACKGROUND,
  payload: { row, col },
});
