import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from './index';
import { epic as app } from './app';
import { epic as friend } from './friend';
import { epic as profile } from './profile';

export type Epic = Epic<RootAction, RootState>;

export const rootEpic = combineEpics(
  app,
  friend,
  profile
);
