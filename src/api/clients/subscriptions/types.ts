import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';

export interface Subscription extends BaseModel {
  name: string;
  day: number;
  createdBy: Member;
}

export interface SaveSubscriptionRequest {
  name: string;
  day: number;
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
