import { BaseModel } from '@api/types';

export type AccountType = 'PERSONAL' | 'BUSINESS';

export interface Account extends BaseModel {
  name: string;
  initialBudget: number;
  type: AccountType;
  currency: string;
}

export interface SaveAccountRequest {
  name: string;
  type: AccountType;
  initialBudget: number;
  currency: string;
}

export interface AccountsFilter {
  keyword?: string | null;
}
