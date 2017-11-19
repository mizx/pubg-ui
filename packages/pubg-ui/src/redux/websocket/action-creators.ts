import * as ActionType from './action-types';
import {
  ConnectionAcceptedResponse,
  RequestId,
  Unknown,
  Service,
  Command,
  WebSocketArgs
} from './types';

export interface WebSocketInit {
  type: ActionType.WEBSOCKET_INIT;
  payload: WebSocketArgs;
}

export const webSocketInit = (payload: WebSocketArgs): WebSocketInit => ({
  type: ActionType.WEBSOCKET_INIT,
  payload
});

export interface WebSocketReady {
  type: ActionType.WEBSOCKET_READY;
}

export const webSocketReady = (): WebSocketReady => ({
  type: ActionType.WEBSOCKET_READY
});

export interface WebSocketError {
  type: ActionType.WEBSOCKET_ERROR;
  payload: { error: any };
}

export const webSocketError = (error: any): WebSocketError => ({
  type: ActionType.WEBSOCKET_ERROR,
  payload: { error }
});

export interface WebSocketClosed {
  type: ActionType.WEBSOCKET_CLOSED;
  payload: { reason: string };
}

export const webSocketClosed = (reason: string): WebSocketClosed => ({
  type: ActionType.WEBSOCKET_CLOSED,
  payload: { reason }
});

export interface WebSocketRequest {
  type: ActionType.WEBSOCKET_REQUEST;
  payload: any[];
}

export interface ConnectionAccepted {
  type: ActionType.WEBSOCKET_CONNECTED;
  payload: ConnectionAcceptedResponse;
}

export const webSocketConnected = (response: ConnectionAcceptedResponse): ConnectionAccepted => ({
  type: ActionType.WEBSOCKET_CONNECTED,
  payload: response
});

let counter = 10000;

export const webSocketRequest = (service: string, command: Command, ...payload: any[]): WebSocketRequest => ({
  type: ActionType.WEBSOCKET_REQUEST,
  payload: [counter++, null, service, command, ...payload]
});

export interface WebSocketResponse {
  type: ActionType.WEBSOCKET_RESPONSE;
  payload: any[];
}

export const webSocketResponse = (payload: any[]): WebSocketResponse => ({
  type: ActionType.WEBSOCKET_RESPONSE,
  payload
});

export type WebSocketActions =
  | WebSocketInit
  | WebSocketReady
  | WebSocketError
  | WebSocketClosed
  | WebSocketRequest
  | WebSocketResponse
  | ConnectionAccepted
;
