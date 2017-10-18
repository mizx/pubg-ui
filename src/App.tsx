import React, { CSSProperties } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { theme, ThemeProvider } from 'styled';

import './App.css';

import store from './store';
import Logo from 'components/logo';
import Typography from 'components/typography';
import Button from 'components/button';
import Profile from 'components/profile';
import SocialTray from 'components/social';
import { Version } from 'pubg-ui-core';
import { ButtonLink, ButtonAction } from 'pubg-ui-core';
import Party from 'components/party';
import Background from 'components/background';

import Routes from 'components/routes';

const styles: { [key: string]: CSSProperties } = {
  main: {
    flexDirection: 'column',
    marginTop: '4vw',
    marginLeft: '4vw',
    position: 'relative'
  }
};

interface Props { }

export const App: React.SFC<Props> = props => (
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
