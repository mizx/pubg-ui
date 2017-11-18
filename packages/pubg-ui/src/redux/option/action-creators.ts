import * as ActionType from './action-types';
import { Region, SquadSize, Perspective } from './types';

export interface SetRegion {
  type: ActionType.SET_REGION;
  payload: { region: Region };
}

export const setRegion = (region: Region): SetRegion => ({
  type: ActionType.SET_REGION,
  payload: { region }
});

export interface SetSquadSize {
  type: ActionType.SET_SQUAD_SIZE;
  payload: { squadSize: SquadSize };
}

export const setSquadSize = (squadSize: SquadSize) => ({
  type: ActionType.SET_SQUAD_SIZE,
  payload: { squadSize }
});

export interface SetPerspective {
  type: ActionType.SET_PERSPECTIVE;
  payload: { perspective: Perspective };
}

export const setPerspective = (perspective: Perspective) => ({
  type: ActionType.SET_PERSPECTIVE,
  payload: { perspective }
});

export type OptionActions =
  | SetRegion
  | SetSquadSize
  | SetPerspective
;
