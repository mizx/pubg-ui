import * as ActionType from './action-types';
import {
  BackendFriendResponse,
  EngineFriendResponse,
  FriendMap
} from './types';

export interface SteamFriendsRequest {
  type: ActionType.STEAM_FRIENDS_REQUEST;
}

export const steamFriendsRequest = (): SteamFriendsRequest => ({
  type: ActionType.STEAM_FRIENDS_REQUEST
});

export interface SteamFriendsResponse {
  type: ActionType.STEAM_FRIENDS_RESPONSE;
  payload: { friends: EngineFriendResponse[] };
}

export const steamFriendsResponse = (friends: EngineFriendResponse[]) => ({
  type: ActionType.STEAM_FRIENDS_RESPONSE,
  payload: { friends }
});

export interface SteamFriendsFailure {
  type: ActionType.STEAM_FRIENDS_FAILURE;
  payload: { error: string };
}

export const steamFriendsFailure = (error: Error): SteamFriendsFailure => ({
  type: ActionType.STEAM_FRIENDS_FAILURE,
  payload: { error: error.message }
});

export interface BackendFriendsRequest {
  type: ActionType.BACKEND_FRIENDS_REQUEST;
  payload: FriendMap;
}

export const backendFriendsRequest = (friends: FriendMap): BackendFriendsRequest => ({
  type: ActionType.BACKEND_FRIENDS_REQUEST,
  payload: friends
});

export interface BackendFriendsSuccess {
  type: ActionType.BACKEND_FRIENDS_SUCCESS;
  payload: { friends: BackendFriendResponse[] };
}

export const backendFriendsSuccess = (friends: BackendFriendResponse[]): BackendFriendsSuccess => ({
  type: ActionType.BACKEND_FRIENDS_SUCCESS,
  payload: { friends }
});

export interface BackendFriendsFailure {
  type: ActionType.BACKEND_FRIENDS_FAILURE;
  payload: { error: string }
}

export const backendFriendsFailure = (error: Error): BackendFriendsFailure => ({
  type: ActionType.BACKEND_FRIENDS_FAILURE,
  payload: { error: error.message }
});

export type FriendActions =
  | SteamFriendsRequest
  | SteamFriendsResponse
  | SteamFriendsFailure
  | BackendFriendsRequest
  | BackendFriendsSuccess
  | BackendFriendsFailure
;
