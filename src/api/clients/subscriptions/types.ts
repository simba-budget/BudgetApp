import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';
import { Merchant } from '../merchants/types';

export interface Subscription extends BaseModel {
  name: string;
  day: number;
  amount: number;
  currency: string;
  createdBy: Member;
  merchant: Merchant;
}

export interface SaveSubscriptionRequest {
  name: string;
  day: number;
  amount: number;
  currency: string;
  accountId: number;
  merchantId: number;
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
