import { DEAL_DAMAGE } from '../actions/actionTypes';

const initialState = {
  hp: 100,
};

const enemyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEAL_DAMAGE:
      return { ...state, hp: state.hp - action.payload.damage };
    default:
      return state;
  }
};

export default enemyReducer;
