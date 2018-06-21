import React, { Component } from 'react';
import './Spellbook.css';

export class Spellbook extends Component {
  renderSpellbook() {
    return (
      <div
        className="spellBook"
        style={{ display: this.props.showSpellbook ? 'block' : 'none' }}
        onClick={(e) => {
          this.props.openTrial(e.target.attributes.trial.value);
          this.props.readySpell(e.target.attributes.name.value);
          this.props.toggleSpellbook();
        }}
      >
        <ul>
          <li name="fire" trial="Math">
            Fire
          </li>
          <li name="ice" trial="Math">
            Ice
          </li>
          <li name="ice" trial="Math">
            Thunder
          </li>
          <li name="ice" trial="Math">
            Water
          </li>
          <li name="ice" trial="Math">
            Quake
          </li>
          <li name="ice" trial="Math">
            Cure
          </li>
        </ul>
      </div>
    );
  }
  render() {
    return this.renderSpellbook();
  }
}

export default Spellbook;
