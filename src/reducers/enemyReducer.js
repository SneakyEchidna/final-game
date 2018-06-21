import { DEAL_DAMAGE } from '../actions/actionTypes';

const initialState = {
  hp: 100,
};

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAL_DAMAGE:
      const newHp = state.hp - action.payload.damage;
      return { ...state, hp: newHp };
    default:
      return state;
  }
};

export default enemyReducer;
