import { connect } from 'react-redux';
import GameWindow from '../components/GameWindow';

const mapStateToProps = state => ({
  message: state.message,
});

const Game = connect(mapStateToProps)(GameWindow);

export default Game;
