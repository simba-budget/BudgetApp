import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Currency extends BaseModel {
  name: string;
  code: string;
  symbol: string;
  logoUrl: string;
}

export interface CurrenciesFilter {
  keyword?: string | null;
}

export type CurrenciesSort = Sort<'name'>;
export type ListCurrenciesRequest = ListRequest<CurrenciesFilter, CurrenciesSort>;
