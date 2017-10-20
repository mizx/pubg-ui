import React from 'react';
import { render } from 'react-dom';

import './polyfills';

import App from './App';
import './coherent';

import './index.css';

render(<App />, document.getElementById('root') as HTMLElement);