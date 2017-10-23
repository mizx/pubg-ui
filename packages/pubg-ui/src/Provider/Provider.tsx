import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import PropTypes from 'prop-types';

import Authentication from '../auth';
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
          <Authentication>
            {React.Children.only(children)}
          </Authentication>
        </ReduxProvider>
      );
    }

    return null;
  }
}

export default Provider;
