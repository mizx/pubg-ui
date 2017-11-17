import { Middleware } from 'redux';

import { ActionType, WebSocketRequest } from '../redux/app';
import { socket$ } from '../websocket/create';

export function webSocketMiddleware(): Middleware {
  return api => next => action => {
    switch (action.type) {
      case ActionType.WEBSOCKET_REQUEST: {
        // FIXME: Dispatch<A> extends Action (no payload), not AnyAction
        const json = JSON.stringify((action as any).payload);
        socket$.next(json);
      }
    }

    return next(action);
  }
}
