import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { Actions as AppActions } from './app';
import { Actions as FriendActions } from './friend';
import { Actions as OptionActions } from './option';
import { Actions as ProfileActions } from './profile';

export type RouterActions = RouterAction | LocationChangeAction;

export type RootAction =
  | RouterActions
  | AppActions
  | FriendActions
  | OptionActions
  | ProfileActions
;
