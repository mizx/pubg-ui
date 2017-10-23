import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import PropTypes from 'prop-types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

import store from '../store';
import { Authentication, ProviderContext, ProviderState, ProviderAction } from './interfaces';
import { getPreferences, setPreferences, PreferenceOptions } from '../preferences';

export interface Props { }

export const initialState: ProviderState = {
  auth: null,
  preference: {
    region: 'na',
    squad: 'solo',
    perspective: 'first-person'
  }
}

class Provider extends React.Component<Props, ProviderState> {

  constructor() {
    super();

    this.state = initialState;
  }

  static childContextTypes = {
    pubg: PropTypes.object
  };

  getChildContext(): ProviderContext {
    const { auth } = this.state;

    return {
      pubg: {
        ...this.state,
        action: {
          setPreference: this.setPreference.bind(this)
        }
      }
    };
  }

  componentDidMount() {
    this.loadPreferences();

    // hack to get around promise never firing with coherent
    setTimeout(() => this.authenticate(), 100);
  }

  loadPreferences() {
    const preference = { ...this.state.preference, ...getPreferences() };

    this.setState({ preference });
  }

  savePreferences(preferences: Partial<PreferenceOptions>) {
    const preference = { ...this.state.preference, ...preferences };

    this.setState({ preference });
    setPreferences(preference);
  }

  setPreference(key: keyof PreferenceOptions, value: string | number) {
    this.savePreferences({ [key]: String(value) });
  }

  authenticate() {
    Observable
      .fromPromise(window.engine.call<Authentication>('GetClientAuthData'))
      .subscribe(auth => this.setState({ auth })) // TODO: this.setState causing crash in-game
  }

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
