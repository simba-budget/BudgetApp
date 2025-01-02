import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';

export interface Subscription extends BaseModel {
  name: string;
  description: string | null;
  day: number;
  amount: number;
  currency: string;
  createdBy: Member;
}

export interface SaveSubscriptionRequest {
  name: string;
  day: number;
  amount: number;
  currency: string;
  accountId: number;
}

export interface SubscriptionsFilter {
  keyword?: string | null;
  accountId: number;
}

export type SubscriptionsSort = Sort<'name'>;
export type ListSubscriptionsRequest = ListRequest<
  SubscriptionsFilter,
  SubscriptionsSort
>;
