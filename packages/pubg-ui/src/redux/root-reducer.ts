import { combineReducers, AnyAction } from 'redux';

import { reducer as app, State as AppState } from './app'
import { reducer as friend, State as FriendState } from './friend';
import { reducer as option, State as OptionState } from './option';
import { reducer as profile, State as ProfileState } from './profile';
import { reducer as session, State as SessionState } from './session';

export interface RootState {
  app: AppState;
  friend: FriendState;
  option: OptionState;
  profile: ProfileState;
  session: SessionState;
}

export const rootReducer = combineReducers<RootState>({
  app,
  friend,
  option,
  profile,
  session
});
