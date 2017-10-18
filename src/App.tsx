import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { theme, ThemeProvider } from 'styled';

import './App.css';

import store from './store';
import Background from 'components/background';

import Routes from 'components/routes';

export const App: React.SFC = props => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <HashRouter>
        <div>
          <Background />
          <Routes />
        </div>
      </HashRouter>
    </ReduxProvider>
  </ThemeProvider>
);

export default App;
