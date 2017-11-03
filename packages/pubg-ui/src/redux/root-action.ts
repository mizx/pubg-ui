import { Actions as AppActions } from './app';
import { Actions as FriendActions } from './friend';
import { Actions as OptionActions } from './option';
import { Actions as ProfileActions } from './profile';
import { Actions as SessionActions } from './session';

export type RootAction =
  | AppActions
  | FriendActions
  | OptionActions
  | ProfileActions
  | SessionActions
;
