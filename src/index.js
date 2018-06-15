import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Game from './containers/Game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
