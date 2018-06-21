import { TAKE_DAMAGE, READY_SPELL, CAST_SPELL } from '../actions/actionTypes';

const initialState = {
  hp: 100,
  action: 'idle', // idle, ready, cast, hit, lowHp
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_DAMAGE:
      const newHp = state.hp - action.payload;
      return { ...state, hp: newHp };
    case READY_SPELL:
      return { ...state, action: 'ready' };
    case CAST_SPELL: {
      return { ...state, action: 'cast' };
    }
    default:
      return state;
  }
};
const getHealth = state => state.player.hp;
export const isHealthLow = state => getHealth(state) < getHealth(state) * 0.15;
export default playerReducer;
