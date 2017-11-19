import { RequestId, Unknown, ResponseService, ResponseCommand, ResponseType, ResponseClientApiType } from '../types';
import { WebSocketResponsePayload } from '../../redux/app';

const REQUEST_ID = 0;
const UNKNOWN = 1;
const SERVICE = 2;
const COMMAND = 3;

export const identifyResponse = (payload: WebSocketResponsePayload): ResponseType => {
  const [requestId, unknown, service, ...other] = payload;

  switch (service) {
    case 'ClientApi': {
      return other[0] as ResponseClientApiType;
    }
    default: return null;
  }
};
