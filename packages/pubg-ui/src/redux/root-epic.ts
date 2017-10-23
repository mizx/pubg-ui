import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from './index';
import { epic as auth } from './auth';

export type Epic = Epic<RootAction, RootState>;

export const rootEpic = combineEpics(
  auth
);
