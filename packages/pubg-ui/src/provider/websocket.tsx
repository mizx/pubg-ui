import React from 'react';

export interface Props { }

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

  render() {
    return React.Children.only(this.props.children);
  }
}

export default WebsocketComponent;
