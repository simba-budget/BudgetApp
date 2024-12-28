import {
  SaveSubscriptionRequest as ApiSaveSubscriptionRequest,
  SubscriptionsFilter as ApiSubscriptionsFilter,
} from '@api/clients/subscriptions/types';

export type SubscriptionsFilter = Omit<ApiSubscriptionsFilter, 'accountId'>;
export type SaveSubscriptionRequest = Omit<ApiSaveSubscriptionRequest, 'accountId'>;
