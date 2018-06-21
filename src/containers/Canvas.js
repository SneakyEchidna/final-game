import { connect } from 'react-redux';
import Canvas from '../components/Canvas';
import { toggleSpellbook } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggleSpellbook: () => dispatch(toggleSpellbook()),
});

const dispatchStateToProps = state => ({
  playerHp: state.player.hp,
  enemyHp: state.enemy.hp,
  heroAction: state.player.action,
  damageType: state.game.damageType,
  spellFrame: state.game.spellFrame,
});

const CanvasContainer = connect(
  dispatchStateToProps,
  mapDispatchToProps,
)(Canvas);

export default CanvasContainer;
