import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '../../redux';
import { WEBSOCKET_RESPONSE } from '../../redux/action-types';
import { WebSocketResponse, webSocketConnected, webSocketError } from '../../redux/action-creators';
import { ResponseType, ResponseClientApiType, Response } from '../types';
import { ConnectionAccepted, WebSocketError } from '../../redux/action-creators';
import { ConnectionAcceptedResponse } from '../../redux/websocket/types';

export const identifyResponse = (payload: any[]): Response => {
  const [requestId, unknown, service, ...other] = payload;

  switch (service) {
    case 'ClientApi': {
      const [ type, ...rest ] = other;

      return { type, payload: rest };
    }
    default: return { type: null, payload: null };
  }
};

export const mapResponseToAction = (response: Response) => {
  const { payload } = response;

  switch (response.type) {
    case 'ConnectionAccepted': {
      const [ accountId, data ] = payload as [string, ConnectionAcceptedResponse];

      return webSocketConnected(data);
    }
  }

  return webSocketError('response for action not found');
};
