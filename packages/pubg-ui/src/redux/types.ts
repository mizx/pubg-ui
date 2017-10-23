import { Dispatch as ReduxDispatch } from 'redux';

import { RootState, RootAction } from '@src/redux';

export type Dispatch = ReduxDispatch<RootState>;
