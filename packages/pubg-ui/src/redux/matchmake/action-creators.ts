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

export type Actions =
  | ToggleReady
  | QueueStart
  | QueueCancel
  | QueueError
;
