import { BaseModel, ListRequest, Sort } from '@api/types';

import { Currency } from '../currencies/types';

export interface ExternalAccount extends BaseModel {
  name: string;
  mask: string;
  availableBalance: number;
  currentBalance: number;
  currency: Currency;
  baseAvailableBalance: number;
  baseCurrentBalance: number;
  baseCurrency: Currency;
}

export interface ExternalAccountsFilter {
  keyword?: string | null;
  accountId: number;
}

export type ExternalAccountsSort = Sort<'name'>;

export type ListExternalAccountsRequest = ListRequest<
  ExternalAccountsFilter,
  ExternalAccountsSort
>;
