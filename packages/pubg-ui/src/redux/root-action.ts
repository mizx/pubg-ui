import { Actions as AppActions } from './app';
import { Actions as AuthActions } from './auth';
import { Actions as OptionActions } from './option';
import { Actions as ProfileActions } from './profile';
import { Actions as SessionActions } from './session';

export type RootAction =
  | AppActions
  | AuthActions
  | OptionActions
  | ProfileActions
  | SessionActions
;
