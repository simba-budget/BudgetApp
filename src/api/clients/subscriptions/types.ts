import { BaseModel, ListRequest, Sort } from '@api/types';

import { Category } from '../categories/types';
import { Currency } from '../currencies/types';
import { Merchant } from '../merchants/types';

export type SubscriptionFrequency = 'ANNUALLY' | 'MONTHLY';

export interface Subscription extends BaseModel {
  name: string;
  frequency: SubscriptionFrequency;
  description: string | null;
  startedAt: string;
  amount: number;
  currency: Currency;
  merchant: Merchant | null;
  category: Category | null;
  baseAmount: number;
  baseCurrency: Currency;
}

export interface SaveSubscriptionRequest {
  name: string;
  frequency: SubscriptionFrequency;
  description: string | null;
  startedAt: string;
  amount: number;
  currencyId: number;
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
