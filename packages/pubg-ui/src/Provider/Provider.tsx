import React from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

import { ProviderContext } from './context';
import { Authentication } from './auth';

export interface Props { }

export interface State {
  auth: Authentication;
}

class Provider extends React.Component<Props, State> {

  static childContextTypes = {
    pubg: PropTypes.string
  };

  getChildContext(): ProviderContext {
    return {
      pubg: 'ohai mark'
    };
  }

  componentDidMount() {
    // hack to get around promise never firing with coherent
    setTimeout(() => this.authenticate(), 100);
  }

  authenticate() {
    Observable
      .fromPromise(window.engine.call<Authentication>('GetClientAuthData'))
      // .subscribe(auth => this.setState({ auth }))
      .subscribe(auth => {
        this.setState({ auth });
        console.log('AUTH', auth);
      })
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}

export default Provider;
