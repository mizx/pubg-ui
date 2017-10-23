import { combineReducers, AnyAction } from 'redux';

import { reducer as auth, State as AuthState } from '@src/redux/auth';
import { reducer as option, State as OptionState } from '@src/redux/option';

export interface RootState {
  auth: AuthState;
  option: OptionState;
}

export const rootReducer = combineReducers<RootState>({
  auth,
  option
});
