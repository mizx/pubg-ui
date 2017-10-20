import { Authentication } from  './auth';

export interface ProviderContext {
  pubg: {
    auth: Authentication | null;
  };
}
