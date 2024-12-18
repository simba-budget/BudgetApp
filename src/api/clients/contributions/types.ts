import { BaseModel } from '@api/types';

import { Goal } from '../goals/types';
import { Member } from '../members/types';

export interface Contribution extends BaseModel {
  amount: number;
  currency: string;
  description: string | null;
  goal: Goal;
  date: string;
  createdBy: Member;
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
