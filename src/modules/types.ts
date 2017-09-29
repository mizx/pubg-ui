import { Dispatch as ReduxDispatch } from 'redux';
import { Epic } from 'redux-observable';

import { State as AppState, Action as AppAction } from './app';

export interface RootState {
  app: AppState;
}

export type RootAction =
  | AppAction
;

export type Epic = Epic<RootAction, RootState>;

export type Dispatch = ReduxDispatch<RootState>;
