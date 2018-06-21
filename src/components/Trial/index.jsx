import React, { Component } from 'react';
import Math from './Math';
import './Trial.css';

export class Trial extends Component {
  renderTrial() {
    switch (this.props.trialType) {
      case 'Math':
        return <Math dealDamage={this.props.dealDamage} openTrial={this.props.openTrial} />;
      default:
        return '';
    }
  }
  render() {
    return (
      <div className="Trial" style={{ display: this.props.trialType ? 'block' : 'none' }}>
        {this.renderTrial()}
      </div>
    );
  }
}

export default Trial;
