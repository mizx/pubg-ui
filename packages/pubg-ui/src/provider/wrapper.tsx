import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';
import { appInitialize, webSocketRequest } from '../redux/app';

import { socket$ } from '../websocket/create';

// setInterval(() => socket$.next(Math.random()), 5000);

export interface DispatchProps {
  appInitialize: typeof appInitialize;
  webSocketRequest: typeof webSocketRequest;
}

export type Props = DispatchProps;

export class WrapperComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.appInitialize();

    setInterval(() => this.props.webSocketRequest(Math.random()), 5000);
  }

  render() {
    return React.Children.only(this.props.children);
  }

}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      appInitialize,
      webSocketRequest
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(WrapperComponent);
