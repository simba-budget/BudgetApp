import { BaseModel } from '@api/types';

export interface Account extends BaseModel {
  name: string;
}

export interface SaveAccountRequest {
  name: string;
}
