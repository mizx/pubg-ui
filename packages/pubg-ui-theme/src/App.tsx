import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import styled, { theme, ThemeProvider } from 'styled';

import './App.css';

import store from './store';
import Background from 'components/background';
import Party from 'components/party';
import Routes from 'components/routes';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const App: React.SFC = props => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <HashRouter>
        <Wrapper>
          <Background />
          <Party />
          <Routes />
        </Wrapper>
      </HashRouter>
    </ReduxProvider>
  </ThemeProvider>
);

export default App;
