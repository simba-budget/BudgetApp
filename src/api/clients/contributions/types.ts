import { BaseModel, ListRequest, Sort } from '@api/types';

import { Currency } from '../currencies/types';

export interface Contribution extends BaseModel {
  description: string | null;
  date: string;
  goalId: number;
  amount: number;
  currency: Currency;
  baseAmount: number;
  baseCurrency: Currency;
}

export interface SaveContributionRequest {
  amount: number;
  currencyId: number;
  description: string | null;
  goalId: number;
  date: string;
}

export interface ContributionsFilter {
  keyword?: string | null;
  goalId?: number | null;
  accountId: number;
}

export type ContributionsSort = Sort<'date'>;
export type ListContributionsRequest = ListRequest<
  ContributionsFilter,
  ContributionsSort
>;
