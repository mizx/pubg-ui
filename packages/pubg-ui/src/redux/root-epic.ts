import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from './index';
import { epic as app } from './app';
import { epic as friend } from './friend';
import { epic as matchmake } from './matchmake';
import { epic as profile } from './profile';
import { default as websocket } from '../backend-api/response/response';

export type Epic = Epic<RootAction, RootState>;

export const rootEpic = combineEpics(
  app,
  friend,
  matchmake,
  profile,
  websocket
);
