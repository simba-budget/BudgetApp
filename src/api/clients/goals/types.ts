import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Goal extends BaseModel {
  name: string;
  description: string | null;
  initialAmount: number;
  targetAmount: number;
  amount: number;
  currency: string;
  startedAt: string;
  endAt: string | null;
}

export interface SaveGoalRequest {
  name: string;
  description: string | null;
  initialAmount: number;
  targetAmount: number;
  currency: string;
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
