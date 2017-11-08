import { Dispatch as ReduxDispatch } from 'redux';
import { Epic as ReduxEpic } from 'redux-observable';

import { RootAction, RootState } from '../redux';

export type Dispatch = ReduxDispatch<RootState>;
