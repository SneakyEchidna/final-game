import React, { Component } from 'react';

export class Math extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
  }
  handleChange(event) {
    this.setState({ answer: event.target.value });
  }
  click() {
    if (this.state.answer === '4') {
      this.props.dealDamage(this.props.damageType, 5);
      this.props.openTrial(null, null);
    }
  }
  render() {
    return (
      <div>
        <label htmlFor="">2</label>
        <label htmlFor="">+</label>
        <label htmlFor="">2</label>
        <label htmlFor="">=</label>
        <input onChange={this.handleChange} type="text" />
        <button onClick={this.click}>Cast</button>
      </div>
    );
  }
}

export default Math;
