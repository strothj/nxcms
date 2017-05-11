/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import { createStore } from './store';

const store = createStore();

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
