import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';

export interface Contribution extends BaseModel {
  amount: number;
  currency: string;
  description: string | null;
  date: string;
  createdBy: Member;
  goalId: number;
}

export interface SaveContributionRequest {
  amount: number;
  currency: string;
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
