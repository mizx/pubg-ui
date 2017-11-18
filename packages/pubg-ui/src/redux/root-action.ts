import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { AppActions } from './app';
import { FriendActions } from './friend';
import { MatchmakeActions } from './matchmake';
import { OptionActions } from './option';
import { ProfileActions } from './profile';

export type RouterActions = RouterAction | LocationChangeAction;

export type RootAction =
  | RouterActions
  | AppActions
  | FriendActions
  | MatchmakeActions
  | OptionActions
  | ProfileActions
;
