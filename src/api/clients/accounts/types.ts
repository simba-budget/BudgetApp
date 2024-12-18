import { BaseModel } from '@api/types';

export interface Account extends BaseModel {
  name: string;
  initialBudget: number;
  currency: string;
}

export interface SaveAccountRequest {
  name: string;
  initialBudget: number;
  currency: string;
}

export interface AccountsFilter {
  keyword?: string | null;
}
