import { Dispatch as ReduxDispatch } from 'redux';
import { Epic } from 'redux-observable';

import { Action as AppAction } from './app';

export interface RootState {
}

export type RootAction =
  | AppAction
;

export type Epic = Epic<RootAction, RootState>;

export type Dispatch = ReduxDispatch<RootState>;
