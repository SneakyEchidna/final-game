import { TAKE_DAMAGE } from '../actions/actionTypes';

const initialState = {
  hp: 100,
  state: 'idle',
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_DAMAGE:
      const newHp = state.hp - action.payload;
      return { ...state, hp: newHp };
    default:
      return state;
  }
};

export default playerReducer;
