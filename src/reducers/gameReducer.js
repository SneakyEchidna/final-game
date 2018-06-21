import { TOGGLE_SPELLBOOK, OPEN_TRIAL } from '../actions/actionTypes';

const initialState = {
  showSpellbook: false,
  trialType: null,
  damageType: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SPELLBOOK:
      return { ...state, showSpellbook: !state.showSpellbook };
    case OPEN_TRIAL:
      return {
        ...state,
        trialType: action.payload.trialType,
        elementType: action.payload.damageType,
      };

    default:
      return state;
  }
};

export default gameReducer;
