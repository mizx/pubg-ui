import { Middleware } from 'redux';

import { socket$ } from '../websocket/create';

export function webSocketMiddleware(): Middleware {
  return (api) => (next) => action => {
    switch (action.type) {
      case 'APP::WEBSOCKET_REQUEST': {
        socket$.next(Math.random());
      }
    }

    return next(action);
  }
}
