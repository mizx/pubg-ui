import React from 'react';
import { HashRouter } from 'react-router-dom';
import styled, { theme, ThemeProvider } from 'styled';
import { PubgProvider } from 'pubg-ui';

import './App.css';

import Background from 'components/background';
import Party from 'components/party';
import Routes from 'components/routes';
import Navigation from 'components/navigation';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const App: React.SFC = props => (
  <PubgProvider>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Wrapper>
          <Background />
          <Party />
          <Navigation />
          <Routes />
        </Wrapper>
      </HashRouter>
    </ThemeProvider>
  </PubgProvider>
);

export default App;
