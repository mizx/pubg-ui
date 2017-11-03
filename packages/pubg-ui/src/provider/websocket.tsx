import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch } from '../redux';
import { webSocketReady } from '../redux/app';

export interface DispatchProps {
  webSocketReady: typeof webSocketReady;
}

export type Props = DispatchProps;

export interface State {

}

export class WebsocketComponent extends React.Component<Props> {

  connection: WebSocket;

  constructor() {
    super();

    this.connection = new WebSocket('ws://localhost:8080/');
    this.connection.onmessage = (event) => {
      console.log(event);
    }

    setInterval(() => this.connection.send(String(Math.random())), 2000);
  }

  componentDidMount() {
    // this.props.webSocketReady();
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    { webSocketReady },
    dispatch
  );

export default connect(null, mapDispatchToProps)(WebsocketComponent);
