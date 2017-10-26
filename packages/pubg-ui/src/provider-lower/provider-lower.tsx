import '../polyfills';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import PropTypes from 'prop-types';

import Wrapper from './wrapper';
import store from '../redux/store';

export interface ProviderContext {
  pubg: string;
}

class Provider extends React.Component {

  static childContextTypes = {
    pubg: PropTypes.string
  };

  getChildContext(): ProviderContext {
    return {
      pubg: 'pubg'
    };
  }

  render() {
    const { children } = this.props;

    if (children) {
      return (
        <ReduxProvider store={store}>
          <Wrapper>
            {React.Children.only(children)}
          </Wrapper>
        </ReduxProvider>
      );
    }

    return null;
  }
}

export default Provider;
