import { BaseModel, ListRequest, Sort } from '@api/types';

import { Currency } from '../currencies/types';

export interface Goal extends BaseModel {
  name: string;
  description: string | null;
  initialAmount: number;
  targetAmount: number;
  amount: number;
  currency: Currency;
  startedAt: string;
  endAt: string | null;
  baseAmount: number;
  baseTargetAmount: number;
  baseInitialAmount: number;
  baseCurrency: Currency;
}

export interface SaveGoalRequest {
  name: string;
  description: string | null;
  initialAmount: number;
  targetAmount: number;
  currencyId: number;
  startedAt: string;
  endAt: string | null;
  accountId: number;
}

export interface GoalsFilter {
  keyword?: string | null;
  accountId: number;
}

export type GoalsSort = Sort<'name'>;
export type ListGoalsRequest = ListRequest<GoalsFilter, GoalsSort>;
