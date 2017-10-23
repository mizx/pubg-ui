import { Dispatch as ReduxDispatch } from 'redux';

import { RootState, RootAction } from '../redux';

export type Dispatch = ReduxDispatch<RootState>;
