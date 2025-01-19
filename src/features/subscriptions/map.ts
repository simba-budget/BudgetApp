import { Subscription } from '@api/clients/subscriptions/types';
import { SelectOption } from '@common/components/Select';

import { SaveSubscriptionRequest } from './types';

export const mapSaveSubscriptionRequest = (
  subscription?: Subscription | null,
): Partial<SaveSubscriptionRequest> => ({
  name: subscription?.name ?? '',
  frequency: subscription?.frequency ?? 'MONTHLY',
  description: subscription?.description ?? null,
  amount: subscription?.amount ?? 0,
  startedAt: subscription?.startedAt ?? '',
  ...(subscription?.currency && { currencyId: subscription.currency.id }),
  ...(subscription?.merchant && { merchantId: subscription.merchant.id }),
  ...(subscription?.category && { categoryId: subscription.category.id }),
});

export const mapSubscriptionToOption = (
  subscription: Subscription,
): SelectOption<number> => ({
  key: subscription.id.toString(),
  value: subscription.id,
  label: subscription.name || subscription.merchant?.name || '',
  iconName: 'card',
});
