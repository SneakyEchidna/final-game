import { connect } from 'react-redux';
import GameWindow from '../components/GameWindow';

const mapStateToProps = state => ({
  message: state.message,
  playerHp: state.player.hp,
});

const Game = connect(mapStateToProps)(GameWindow);

export default Game;
