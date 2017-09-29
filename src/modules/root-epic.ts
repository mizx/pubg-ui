import { combineEpics } from 'redux-observable';

import { epic as app } from './app';

export const rootEpic = combineEpics(
  app
);
