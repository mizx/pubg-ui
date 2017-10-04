import { Dispatch as ReduxDispatch } from 'redux';
import { Epic } from 'redux-observable';

import { Action as AppAction } from './app';
import { State as GameState, Action as GameAction } from './game';

export interface RootState {
  game: GameState;
}

export type RootAction =
  | AppAction
  | GameAction
;

export type Epic = Epic<RootAction, RootState>;

export type Dispatch = ReduxDispatch<RootState>;
