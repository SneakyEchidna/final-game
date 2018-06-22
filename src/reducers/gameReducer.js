import {
  TOGGLE_SPELLBOOK,
  OPEN_TRIAL,
  NEXT_SPELL_FRAME,
  READY_SPELL,
  SET_BACKGROUND,
} from '../actions/actionTypes';

const initialState = {
  showSpellbook: false,
  trialType: null,
  damageType: null,
  animateSpell: false,
  spellFrame: null,
  background: { row: 0, col: 0 },
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
    case SET_BACKGROUND:
      return { ...state, background: { row: action.payload.row, col: action.payload.col } };
    default:
      return state;
  }
};

export default gameReducer;
