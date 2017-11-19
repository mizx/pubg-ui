import '../polyfills';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../history';
import Wrapper from './wrapper';
import store from '../redux/store';

export interface Props { }

export const Provider: React.SFC<Props> = props => (
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <Wrapper>
        {React.Children.only(props.children)}
      </Wrapper>
    </ConnectedRouter>
  </ReduxProvider>
)

export default Provider;
