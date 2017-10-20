import React from 'react';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/fromPromise';

import { ProviderContext } from './context';
import { Authentication } from './auth';

export interface Props { }

export interface State {
  auth: Authentication | null;
}

class Provider extends React.Component<Props, State> {

  constructor() {
    super();

    this.state = {
      auth: null
    };
  }

  static childContextTypes = {
    pubg: PropTypes.object
  };

  getChildContext(): ProviderContext {
    const { auth } = this.state;

    return {
      pubg: { auth }
    };
  }

  componentDidMount() {
    // hack to get around promise never firing with coherent
    setTimeout(() => this.authenticate(), 100);
  }

  authenticate() {
    Observable
      .fromPromise(window.engine.call<Authentication>('GetClientAuthData'))
      .subscribe(auth => this.setState({ auth })) // TODO: this.setState causing crash in-game
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}

export default Provider;
