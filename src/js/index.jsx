/* eslint-disable linebreak-style */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './rootStore';

// eslint-disable-next-line no-undef
render(
  <Provider store={ store }>
    <App />, document.getElementById('root')
  </Provider>
);
