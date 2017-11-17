import { combineReducers, AnyAction } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as app, AppState } from './app'
import { reducer as friend, FriendState } from './friend';
import { reducer as matchmake, MatchmakeState } from './matchmake';
import { reducer as option, OptionState } from './option';
import { reducer as profile, ProfileState } from './profile';

export interface RootState {
  app: AppState;
  friend: FriendState;
  matchmake: MatchmakeState;
  option: OptionState;
  profile: ProfileState;
}

export const rootReducer = combineReducers<RootState>({
  app,
  friend,
  matchmake,
  option,
  profile,
  routerReducer
});
