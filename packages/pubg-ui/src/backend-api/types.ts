export type RequestId = number;
export type Unknown = null; // all are null?
export type RequestService = 'UserProxyApi';
export type ResponseService = 'ClientApi' | true;
export type ResponseCommand = 
  | 'GetPartyData'
  | 'GetAnnouncement'
  | 'GetUserMatchState'
  | 'GetOpenGameInfo'
  | 'GetUserMatchState'
  | 'GetOpenGameInfo'
  | 'GetBroUserStatesBySteamId'
  | 'RequestMatch'
;

export type ResponseClientApiType =
  | 'ConnectionAccepted'
  | 'Invalidate'
  | 'InventoryInitialized'
;

export type ResponseType = 
  | null
  | ResponseClientApiType
  | 'ConnectionAccepted'
;

export interface Response {
  type: ResponseType,
  payload: any;
}

// export type Response =
//   | [number, null, 'ClientApi', 'ConnectionAccepted', string, any]
//   | [number, null, 'ClientApi', 'Invalidate', 'client.party', null, null]
//   | 
// ;
