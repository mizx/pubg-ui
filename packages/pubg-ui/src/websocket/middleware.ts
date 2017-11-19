import { Middleware } from 'redux';

import { WebSocketRequest } from '../redux/action-creators';
import { WEBSOCKET_REQUEST } from '../redux/action-types';
import { queue } from '../websocket/create';

export function webSocketMiddleware(): Middleware {
  return api => next => action => {
    if (action.type === WEBSOCKET_REQUEST) {
        const { payload } = (action as any);
        queue.next(payload);
    }

    return next(action);
  };
}
