import { Actions as AppActions } from './app';
import { Actions as AuthActions } from './auth';
import { Actions as OptionActions } from './option';

export type RootAction =
  | AppActions
  | AuthActions
  | OptionActions
;
