import { TAKE_DAMAGE, READY_SPELL, CAST_SPELL, SET_PLAYER_ACTION } from '../actions/actionTypes';

const initialState = {
  hp: 100,
  action: 'idle', // idle, ready, cast, hit, lowHp
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_DAMAGE:
      return { ...state, hp: state.hp - action.payload };
    case READY_SPELL:
      return { ...state, action: 'ready' };
    case CAST_SPELL: {
      return { ...state, action: 'cast' };
    }
    case SET_PLAYER_ACTION:
      return { ...state, action: action.payload };
    default:
      return state;
  }
};
const getHealth = state => state.player.hp;
export const getAction = state => state.player.action;
export const isHealthLow = state => getHealth(state) < getHealth(state) * 0.15;
export default playerReducer;
