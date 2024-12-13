import { BaseModel } from '@api/types';

export interface Account extends BaseModel {
  name: string;
}

export interface SaveAccountRequest {
  name: string;
}

export interface AccountsFilter {
  keyword?: string | null;
}
