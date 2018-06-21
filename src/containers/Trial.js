import { connect } from 'react-redux';
import Trial from '../components/Trial';
import { toggleSpellbook, dealDamage, openTrial } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggleSpellbook: () => dispatch(toggleSpellbook()),
  dealDamage: (damageType, damage) => dispatch(dealDamage(damageType, damage)),
  openTrial: (damageType, trialType) => dispatch(openTrial(damageType, trialType)),
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
