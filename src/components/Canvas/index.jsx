import React, { Component } from 'react';
import updateCanvas from './updateCanvas';
import drawCanvas from './drawCanvas';

export default class Canvas extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.sprites = [];
    this.loadedImages = {};
  }
  componentDidMount() {
    this.loadResources();
    this.ctx = this.canvas.current.getContext('2d');
    drawCanvas(this.ctx);
  }

  componentDidUpdate() {
    updateCanvas(
      this.ctx,
      this.props.playerHp,
      this.props.enemyHp,
      this.props.heroAction,
      this.props.damageType,
      this.props.spellFrame,
      this.loadedImages,
    );
  }
  loadResources() {
    this.sprites = [
      { name: 'player', src: `${process.env.PUBLIC_URL}/player.png` },
      { name: 'background', src: `${process.env.PUBLIC_URL}/backgrounds.png` },
      { name: 'ice', src: `${process.env.PUBLIC_URL}/ice.png` },
      { name: 'fire', src: `${process.env.PUBLIC_URL}/fire.png` },
      { name: 'thunder', src: `${process.env.PUBLIC_URL}/thunder.png` },
    ];
    this.loadedImages = this.sprites.reduce((acc, sprite) => {
      const img = new Image();
      img.src = sprite.src;
      acc[sprite.name] = img;
      return acc;
    }, {});
  }
  clickHandler() {
    this.props.toggleSpellbook();
  }
  render() {
    return (
      <canvas
        ref={this.canvas}
        width={520}
        height={240}
        style={{ display: 'block' }}
        onClick={() => this.clickHandler()}
      />
    );
  }
}
