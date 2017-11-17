import { combineEpics, Epic } from 'redux-observable';

import { RootAction, RootState } from '..';
import * as ActionType from './action-types';
import { queueStart } from './action-creators';
import { isReady } from '../selectors';

/**
 * TODO: Eventually TOGGLE_READY will need to check
 * matchmake.ready state and either trigger ready
 * or start queue if soloing.
 */
export const onReadyEpic: Epic<RootAction, RootState> = (action$, api) =>
  action$.ofType(ActionType.TOGGLE_READY)
    .map(() => queueStart());
    
export default combineEpics(
  onReadyEpic
);
