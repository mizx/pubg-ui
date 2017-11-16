import { Middleware } from 'redux';

import { ActionType } from '../redux/app';
import { socket$ } from '../websocket/create';

/**
 * Watch for websocket requests being dispatched.
 * When a call gets dispatched, pull state using
 * `api.getState()` and use a redux selector to
 * get whatever state data you need for the 
 * websocket request.
 */
export function webSocketMiddleware(): Middleware {
  return api => next => action => {
    switch (action.type) {
      case ActionType.WEBSOCKET_REQUEST: {
        socket$.next(Math.random());
      }
    }

    return next(action);
  }
}
