import { Subscription } from '@api/clients/subscriptions/types';

import { SaveSubscriptionRequest } from './types';

export const mapSaveSubscriptionRequest = (
  subscription?: Subscription | null,
): SaveSubscriptionRequest => ({
  name: subscription?.name ?? '',
  frequency: subscription?.frequency ?? 'MONTHLY',
  description: subscription?.description ?? null,
  amount: subscription?.amount ?? 0,
  currency: subscription?.currency ?? 'EUR',
  startedAt: subscription?.startedAt ?? '',
  merchantId: subscription?.merchant?.id ?? 0,
  categoryId: subscription?.category?.id ?? 0,
});
