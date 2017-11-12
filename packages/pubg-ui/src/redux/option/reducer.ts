import { Reducer } from 'redux';

import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Actions } from './action-creators';
import { Region, SquadSize, Perspective } from './types';

export interface State {
  region: Region;
  squadSize: SquadSize;
  perspective: Perspective;
}

export const initialState: State = {
  region: 'na',
  squadSize: 'solo',
  perspective: 'third-person'
};

export const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.SET_REGION: {
      const { region } = action.payload;
      return { ...state, region };
    }
    case ActionType.SET_SQUAD_SIZE: {
      const { squadSize } = action.payload;
      return { ...state, squadSize };
    }
    case ActionType.SET_PERSPECTIVE: {
      const { perspective } = action.payload;
      return { ...state, perspective };
    }
    default: return state;
  }
};

export default reducer;
