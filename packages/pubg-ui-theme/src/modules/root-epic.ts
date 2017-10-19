import { combineEpics } from 'redux-observable';

import { epic as game } from './game';

export const rootEpic = combineEpics(
  game
);
