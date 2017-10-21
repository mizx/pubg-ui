import { combineReducers } from 'redux';

import { RootAction, RootState } from 'modules';
import { reducer as app } from './app';

export const rootReducer = combineReducers<RootState>({
  app
});
