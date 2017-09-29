import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import './coherent';

setTimeout(() =>
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
  )
);
