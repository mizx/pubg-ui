import { Actions as AuthActions } from '../redux/auth';
import { Actions as OptionActions } from '../redux/option';

export type RootAction =
  | AuthActions
  | OptionActions
;
