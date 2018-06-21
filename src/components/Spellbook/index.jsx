import React, { Component } from 'react';
import './Spellbook.css';

export class Spellbook extends Component {
  renderSpellbook() {
    return (
      <div
        className="spellBook"
        style={{ display: this.props.showSpellbook ? 'block' : 'none' }}
        onClick={(e) => {
          this.props.openTrial(e.target.attributes.name.value, e.target.attributes.trial.value);
          this.props.toggleSpellbook();
        }}
      >
        <ul>
          <li>Fire</li>
          <li name="ice" trial="Math">
            Ice
          </li>
          <li>Thunder</li>
          <li>Water</li>
          <li>Quake</li>
          <li>Cure</li>
        </ul>
      </div>
    );
  }
  render() {
    return this.renderSpellbook();
  }
}

export default Spellbook;
