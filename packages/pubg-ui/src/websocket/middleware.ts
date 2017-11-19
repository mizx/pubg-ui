import { Middleware } from 'redux';

import { WebSocketRequest } from '../redux/action-creators';
import { WEBSOCKET_REQUEST } from '../redux/action-types';
import { queue } from '../websocket/create';

export function webSocketMiddleware(): Middleware {
  return api => next => action => {
    if (action.type === WEBSOCKET_REQUEST) {
        // FIXME: Dispatch<A> extends Action (no payload), not AnyAction
        const json = JSON.stringify((action as any).payload);
        queue.next(json);
    }

    return next(action);
  };
}
