import { Subscription } from '@api/clients/subscriptions/types';

import { SaveSubscriptionRequest } from './types';

export const mapSaveSubscriptionRequest = (
  subscription?: Subscription | null,
): SaveSubscriptionRequest => ({
  name: subscription?.name ?? '',
  day: subscription?.day ?? 15,
});
