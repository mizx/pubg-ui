import * as ActionType from './action-types';
import * as ActionCreators from './action-creators';
import { Action } from './action-creators';
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

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_REGION: {

    }
    default: return state;
  }
}
