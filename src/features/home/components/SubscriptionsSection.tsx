import { Subscription } from '@api/clients/subscriptions/types';
import { Text } from '@common/v2/components';
import { SubscriptionsListItem } from '@features/subscriptions/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface SubscriptionsSectionProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  subscriptions: Subscription[];
  onSubscriptionPress: (subscription: Subscription) => void;
  onViewAllPress: () => void;
}

const SubscriptionsSection = ({
  style,
  total,
  onSubscriptionPress,
  subscriptions,
  onViewAllPress,
}: SubscriptionsSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={[rowCenter, margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Upcoming Subscriptions')}
        </Text>
        <TouchableOpacity
          style={[rowCenter, gap('column')('xxs')]}
          onPress={onViewAllPress}>
          <Text color="tertiary" size="s" weight="medium">
            {`${t('See All')} (${total})`}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={gap('row')('xs')}>
        {subscriptions.map((subscription) => (
          <SubscriptionsListItem
            key={subscription.id}
            subscription={subscription}
            onPress={() => onSubscriptionPress(subscription)}
          />
        ))}
      </View>
    </View>
  );
};

export default SubscriptionsSection;
