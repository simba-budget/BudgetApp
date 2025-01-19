import { BaseModel, ListRequest, Sort } from '@api/types';

import { Currency } from '../currencies/types';

export type AccountType = 'PERSONAL' | 'BUSINESS';

export interface Account extends BaseModel {
  name: string;
  type: AccountType;
  membersCount: number;
  balance: number;
  currency: Currency;
}

export interface SaveAccountRequest {
  name: string;
  type: AccountType;
  currencyId: number;
}

export interface AccountsFilter {
  keyword?: string | null;
}

export type AccountsSort = Sort<'name'>;
export type ListAccountsRequest = ListRequest<AccountsFilter, AccountsSort>;
