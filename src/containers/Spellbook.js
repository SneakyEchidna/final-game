import { connect } from 'react-redux';
import Spellbook from '../components/Spellbook';
import { toggleSpellbook, takeDamage, dealDamage, openTrial, readySpell } from '../actions';

const mapDispatchToProps = dispatch => ({
  toggleSpellbook: () => dispatch(toggleSpellbook()),
  takeDamage: damage => dispatch(takeDamage(damage)),
  dealDamage: (damageType, damage) => dispatch(dealDamage(damageType, damage)),
  openTrial: trialType => dispatch(openTrial(trialType)),
  readySpell: damageType => dispatch(readySpell(damageType)),
});
const mapStateToProps = state => ({
  showSpellbook: state.game.showSpellbook,
});

const SpellbookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Spellbook);

export default SpellbookContainer;
