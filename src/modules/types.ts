import { Dispatch as ReduxDispatch } from 'redux';
import { Epic } from 'redux-observable';

import { State as GameState, Action as GameAction } from './game';

export interface RootState {
  game: GameState;
}

export type RootAction =
  | GameAction
;

export type Epic = Epic<RootAction, RootState>;

export type Dispatch = ReduxDispatch<RootState>;
