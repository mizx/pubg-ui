import { combineReducers, AnyAction } from 'redux';

import { reducer as app, State as AppState } from './app'
import { reducer as auth, State as AuthState } from './auth';
import { reducer as option, State as OptionState } from './option';

export interface RootState {
  app: AppState;
  auth: AuthState;
  option: OptionState;
}

export const rootReducer = combineReducers<RootState>({
  app,
  auth,
  option
});
