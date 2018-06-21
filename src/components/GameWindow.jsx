import React from 'react';
import Canvas from '../containers/Canvas';
import Spellbook from '../containers/Spellbook';
import Trial from '../containers/Trial';

const GameWindow = () => (
  <div style={({ margin: '0 auto' }, { width: '80%' })}>
    <Spellbook />
    <Trial />
    <Canvas />
  </div>
);

export default GameWindow;
