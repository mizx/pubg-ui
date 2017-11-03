import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from './index';
import { epic as app } from './app';
import { epic as auth } from './auth';
import { epic as friend } from './friend';

export type Epic = Epic<RootAction, RootState>;

export const rootEpic = combineEpics(
  app,
  auth,
  friend
);
