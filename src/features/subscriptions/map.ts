import { Subscription } from '@api/clients/subscriptions/types';

import { SaveSubscriptionRequest } from './types';

export const mapSaveSubscriptionRequest = (
  subscription?: Subscription | null,
): SaveSubscriptionRequest => ({
  name: subscription?.name ?? '',
  amount: subscription?.amount ?? 0,
  currency: subscription?.currency ?? 'EUR',
  day: subscription?.day ?? 15,
});
