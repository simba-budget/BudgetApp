import { BaseModel, ListRequest, Sort } from '@api/types';

import { Category } from '../categories/types';
import { Merchant } from '../merchants/types';

export type SubscriptionFrequency = 'ANNUALLY' | 'MONTHLY';

export interface Subscription extends BaseModel {
  name: string;
  frequency: SubscriptionFrequency;
  description: string | null;
  startedAt: string;
  amount: number;
  currency: string;
  merchant: Merchant | null;
  category: Category | null;
}

export interface SaveSubscriptionRequest {
  name: string;
  frequency: SubscriptionFrequency;
  description: string | null;
  startedAt: string;
  amount: number;
  currency: string;
  accountId: number;
  merchantId: number | null;
  categoryId: number | null;
}

export interface SubscriptionsFilter {
  keyword?: string | null;
  merchantId?: number | null;
  categoryId?: number | null;
  accountId: number;
}

export type SubscriptionsSort = Sort<'name'>;

export type ListSubscriptionsRequest = ListRequest<
  SubscriptionsFilter,
  SubscriptionsSort
>;
