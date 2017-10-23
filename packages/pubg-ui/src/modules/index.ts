import { combineReducers } from 'redux';
import { Dispatch as ReduxDispatch, AnyAction } from 'redux';

import { Action as AuthAction, State as AuthState, reducer as auth } from './auth';

export interface RootState {
  auth: AuthState;
}

export type RootAction =
  | AuthAction
;

export const rootReducer = combineReducers<RootState>({
  auth
});
