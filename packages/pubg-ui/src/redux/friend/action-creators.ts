import * as ActionType from './action-types';
import { SocketFriendResponse, EngineFriendResponse } from '.';

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

export interface SocketFriendsRequest {
  type: ActionType.SOCKET_FRIENDS_REQUEST;
}

export const socketFriendsRequest = (): SocketFriendsRequest => ({
  type: ActionType.SOCKET_FRIENDS_REQUEST
});

export interface SocketFriendsSuccess {
  type: ActionType.SOCKET_FRIENDS_SUCCESS;
  payload: { friends: SocketFriendResponse[] };
}

export const socketFriendsSuccess = (friends: SocketFriendResponse[]): SocketFriendsSuccess => ({
  type: ActionType.SOCKET_FRIENDS_SUCCESS,
  payload: { friends }
});

export interface SocketFriendsFailure {
  type: ActionType.SOCKET_FRIENDS_FAILURE;
  payload: { error: string }
}

export const socketFriendsFailure = (error: Error): SocketFriendsFailure => ({
  type: ActionType.SOCKET_FRIENDS_FAILURE,
  payload: { error: error.message }
});

export type Actions =
  | SteamFriendsRequest
  | SteamFriendsResponse
  | SteamFriendsFailure
  | SocketFriendsRequest
  | SocketFriendsSuccess
  | SocketFriendsFailure
;
