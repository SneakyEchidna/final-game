import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import enemyReducer from './enemyReducer';
import gameReducer from './gameReducer';

const reducer = combineReducers({
  player: playerReducer,
  enemy: enemyReducer,
  game: gameReducer,
});

export default reducer;
