import { Actions as AppActions } from './app';
import { Actions as FriendActions } from './friend';
import { Actions as OptionActions } from './option';
import { Actions as ProfileActions } from './profile';

export type RootAction =
  | AppActions
  | FriendActions
  | OptionActions
  | ProfileActions
;
