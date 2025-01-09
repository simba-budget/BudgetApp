import { Action, Text } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Action';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  subscriptionDeleteRoute,
  subscriptionEditRoute,
  subscriptionRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface SubscriptionActionsProps {
  id: number;
}

const SubscriptionActions = ({ id }: SubscriptionActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useSubscriptionsTranslations();

  const actionItems = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View subscription details'),
        onPress: () => navigation.replace(subscriptionRoute, { id }),
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit subscription details'),
        onPress: () => navigation.push(subscriptionEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete subscription'),
        onPress: () => navigation.push(subscriptionDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return (
    <View
      style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('xs')]}>
      <Text
        style={margin('bottom')('s')}
        textAlign="center"
        color="primary"
        size="m"
        weight="semiBold">
        {t('Subscription Actions')}
      </Text>
      {actionItems.map((item, index) => (
        <Action key={index} item={item} />
      ))}
    </View>
  );
};

export default SubscriptionActions;
