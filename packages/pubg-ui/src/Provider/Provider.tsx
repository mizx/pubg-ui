import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

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

  // componentDidMount() {
  //   // hack to get around promise never firing with coherent
  //   setTimeout(() => this.authenticate(), 100);
  // }
  //
  // authenticate() {
  //   Observable
  //     .fromPromise(window.engine.call<Authentication>('GetClientAuthData'))
  //     .subscribe(auth => this.setState({ auth })) // TODO: this.setState causing crash in-game
  // }

  render() {
    const { children } = this.props;

    if (children) {
      return (
        <ReduxProvider store={store}>
          {React.Children.only(children)}
        </ReduxProvider>
      );
    }

    return null;
  }
}

export default Provider;
