import * as ActionType from './action-types';

export interface ToggleReady {
  type: ActionType.TOGGLE_READY;
}

export const toggleReady = (): ToggleReady => ({
  type: ActionType.TOGGLE_READY
});

export interface QueueStart {
  type: ActionType.QUEUE_START;
}

export const queueStart = (): QueueStart => ({
  type: ActionType.QUEUE_START
});

export interface QueueCancel {
  type: ActionType.QUEUE_CANCEL;
}

export const queueCancel = (): QueueCancel => ({
  type: ActionType.QUEUE_CANCEL
});

export interface QueueError {
  type: ActionType.QUEUE_ERROR;
  payload: { error: string };
}

export const queueError = (error: Error): QueueError => ({
  type: ActionType.QUEUE_ERROR,
  payload: { error: error.message }
});

export interface PartyRequest {
  type: ActionType.PARTY_REQUEST;
}

export const partyRequest = (): PartyRequest => ({
  type: ActionType.PARTY_REQUEST
});

export interface PartyResponse {
  type: ActionType.PARTY_RESPONSE;
  payload: any[];
}

export const partyResponse = (payload: any[]): PartyResponse => ({
  type: ActionType.PARTY_RESPONSE,
  payload
});

export interface PartyFailure {
  type: ActionType.PARTY_FAILURE;
  payload: { error: string };
}

export const partyFailure = (error: Error): PartyFailure => ({
  type: ActionType.PARTY_FAILURE,
  payload: { error: error.message }
});

export type MatchmakeActions =
  | ToggleReady
  | QueueStart
  | QueueCancel
  | QueueError
  | PartyRequest
  | PartyResponse
  | PartyFailure
;
