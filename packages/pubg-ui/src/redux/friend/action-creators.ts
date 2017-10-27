import * as ActionType from './action-types';
import { Friend } from '../../types';

export interface FetchFriendsRequest {
  type: ActionType.FETCH_FRIENDS_REQUEST;
}

export const fetchFriendsRequest = (): FetchFriendsRequest => ({
  type: ActionType.FETCH_FRIENDS_REQUEST
});

export interface FetchFriendsSuccess {
  type: ActionType.FETCH_FRIENDS_SUCCESS;
  payload: { friends: Friend[] };
}

export const fetchFriendsSuccess = (friends: Friend[]): FetchFriendsSuccess => ({
  type: ActionType.FETCH_FRIENDS_SUCCESS,
  payload: { friends }
});

export interface FetchFriendsFailure {
  type: ActionType.FETCH_FRIENDS_FAILURE;
  payload: { error: string }
}

export const fetchFriendsFailure = (error: Error): FetchFriendsFailure => ({
  type: ActionType.FETCH_FRIENDS_FAILURE,
  payload: { error: error.message }
});

export type Actions =
  | FetchFriendsRequest
  | FetchFriendsSuccess
  | FetchFriendsFailure
;
