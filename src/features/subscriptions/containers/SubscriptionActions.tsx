import { Actions } from '@common/components';
import { ActionItem } from '@common/components/Actions';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  subscriptionDeleteRoute,
  subscriptionEditRoute,
  subscriptionRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

export interface SubscriptionActionsProps {
  id: number;
}

const SubscriptionActions = ({ id }: SubscriptionActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useSubscriptionsTranslations();

  const items = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View subscription details'),
        onPress: () => navigation.navigate(subscriptionRoute, { id }),
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit subscription details'),
        onPress: () => navigation.navigate(subscriptionEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete subscription'),
        onPress: () => navigation.navigate(subscriptionDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return <Actions items={items} title={t('Subscription Actions')} />;
};

export default SubscriptionActions;
