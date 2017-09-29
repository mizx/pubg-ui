import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './polyfills';

import App from './App';
import store from './store';

import './index.css';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

const selector = document.getElementById('root') as HTMLElement;

setTimeout(() => render(Root, selector));
