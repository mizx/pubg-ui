import { Actions as AuthActions } from '@src/redux/auth';
import { Actions as OptionActions } from '@src/redux/option';

export type RootAction =
  | AuthActions
  | OptionActions
;
