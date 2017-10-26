import React from 'react';
import { client } from 'websocket';

export interface Props { }

export interface State {

}

export class WebsocketComponent extends React.Component<Props> {

  connection: WebSocket;

  constructor() {
    super();

    this.connection = new WebSocket('wss://echo.websocket.org');
    this.connection.onmessage = (event) => {
      console.log(event);
    }

    setInterval(() => this.connection.send(String(Math.random())), 2000);
  }

  render() {
    return null;
  }
}

export default WebsocketComponent;
