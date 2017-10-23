import { combineReducers } from 'redux';
import { Dispatch as ReduxDispatch, AnyAction } from 'redux';

import {
  Action as AuthAction,
  State as AuthState,
  reducer as auth
} from './auth';
import {
  Action as OptionAction,
  State as OptionState,
  reducer as option
} from './option';

export interface RootState {
  auth: AuthState;
  option: OptionState;
}

export type RootAction =
  | AuthAction
  | OptionAction
;

export const rootReducer = combineReducers<RootState>({
  auth,
  option
});
