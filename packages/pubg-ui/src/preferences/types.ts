import { PreferenceOptions } from './interfaces';

export type Region =
  | 'na'
  | 'eu'
  | 'as'
  | 'jp'
  | 'oc'
  | 'sa'
  | 'sea'
;

export type SquadSize =
  | 'solo'
  | 'duo'
  | 'squad'
;

export type Perspective =
  | 'first-person'
  | 'third-person'
;

export type SetPreference = (key: keyof PreferenceOptions, value: string) => void;
