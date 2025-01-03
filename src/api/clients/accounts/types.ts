import { BaseModel, ListRequest, Sort } from '@api/types';

export type AccountType = 'PERSONAL' | 'BUSINESS';

export interface Account extends BaseModel {
  name: string;
  initialBalance: number;
  balance: number;
  type: AccountType;
  currency: string;
  membersCount: number;
}

export interface SaveAccountRequest {
  name: string;
  type: AccountType;
  initialBalance: number;
  currency: string;
}

export interface AccountsFilter {
  keyword?: string | null;
}

export type AccountsSort = Sort<'name'>;
export type ListAccountsRequest = ListRequest<AccountsFilter, AccountsSort>;
