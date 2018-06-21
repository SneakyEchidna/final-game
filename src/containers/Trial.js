import { connect } from 'react-redux';
import Trial from '../components/Trial';
import { toggleSpellbook, castSpell, openTrial } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggleSpellbook: () => dispatch(toggleSpellbook()),
  castSpell: (damageType, damage) => dispatch(castSpell(damageType, damage)),
  openTrial: trialType => dispatch(openTrial(trialType)),
});
const mapStateToProps = state => ({
  trialType: state.game.trialType,
  damageType: state.game.damageType,
});

const TrialContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trial);

export default TrialContainer;
