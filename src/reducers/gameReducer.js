import {
  TOGGLE_SPELLBOOK,
  OPEN_TRIAL,
  NEXT_SPELL_FRAME,
  READY_SPELL,
} from '../actions/actionTypes';

const initialState = {
  showSpellbook: false,
  trialType: null,
  damageType: null,
  animateSpell: false,
  spellFrame: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SPELLBOOK:
      return { ...state, showSpellbook: !state.showSpellbook };
    case OPEN_TRIAL:
      return {
        ...state,
        trialType: action.payload.trialType,
      };
    case READY_SPELL:
      return {
        ...state,
        damageType: action.payload.damageType,
      };
    case NEXT_SPELL_FRAME:
      if (state.spellFrame === null) {
        return { ...state, spellFrame: 0 };
      }
      if (state.spellFrame === 3) {
        return { ...state, spellFrame: null };
      }
      return { ...state, spellFrame: state.spellFrame + 1 };
    default:
      return state;
  }
};

export default gameReducer;
