import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Dispatch, RootState } from '../redux';
import { webSocketReady } from '../redux/app';

export interface DispatchProps {
  webSocketReady: typeof webSocketReady;
}

export interface StateProps {

}

export type Props = DispatchProps & StateProps;

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

    // setInterval(() => this.connection.send(String(Math.random())), 2000);
  }

  componentDidMount() {

  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const mapStateToProps = (state: RootState): StateProps => ({

})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    { webSocketReady },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WebsocketComponent);
