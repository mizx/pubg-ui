import { combineReducers } from 'redux';

import { RootAction, RootState } from 'modules';
import { reducer as game } from './game';

export const rootReducer = combineReducers<RootState>({
  game
});
