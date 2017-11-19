import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '../../redux';
import { WEBSOCKET_RESPONSE } from '../../redux/action-types';
import { WebSocketResponse, webSocketConnected, webSocketError } from '../../redux/action-creators';
import { ResponseType, ResponseClientApiType, Response } from '../types';
import { WebSocketResponsePayload, ConnectionAcceptedResponse } from '../../redux/app';

export const onResponse: Epic<RootAction, RootState> = action$ =>
  action$.ofType(WEBSOCKET_RESPONSE)
    .map(action => action as WebSocketResponse)
    .map(action => identifyResponse(action.payload))
    .map(response => mapResponseToAction(response));

export default combineEpics(
  onResponse
);

export const identifyResponse = (payload: WebSocketResponsePayload): Response => {
  const [requestId, unknown, service, ...other] = payload;

  switch (service) {
    case 'ClientApi': {
      const [ type, ...rest ] = other;

      return { type, payload: rest };
    }
    default: return { type: null, payload: null };
  }
};

const mapResponseToAction = (response: Response) => {
  const { payload } = response;

  switch (response.type) {
    case 'ConnectionAccepted': {
      const [ accountId, data ] = payload as [string, ConnectionAcceptedResponse];

      return webSocketConnected(data);
    }
  }

  return webSocketError('response for action not found');
};
