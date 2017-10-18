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
          <Logo />
          <Profile />
          <div style={styles.main}>
            <ButtonLink url="https://www.google.com">
              <Typography type="main">Google Platform</Typography>
            </ButtonLink>
            <ButtonLink url="http://www.google.com" type="external">
              <Typography type="main">Google External</Typography>
            </ButtonLink>
            <ButtonAction action="options">
              <Typography type="main-sm">Options</Typography>
            </ButtonAction>
            <ButtonAction action="quit">
              <Typography type="main-sm">Quit</Typography>
            </ButtonAction>
            <Button onClick={() => window.engine.trigger('ShowGameOption')}>
              <Typography type="main-sm">Settings</Typography>
            </Button>
            <Button>
              <Typography type="main-sm">Patch Notes <Version /></Typography>
            </Button>
            <Button onClick={() => window.engine.trigger('Quit')}>
              <Typography type="version">Quit</Typography>
            </Button>
            <Party />
          </div>
        </div>
      </HashRouter>
    </ReduxProvider>
  </ThemeProvider>
);

export default App;
