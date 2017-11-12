import { Dispatch as ReduxDispatch } from 'redux';

import { RootState } from '../redux';

export type Dispatch = ReduxDispatch<RootState>;
