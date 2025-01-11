import { Subscription } from '@api/clients/subscriptions/types';
import { SkeletonsList, Text } from '@common/components';
import {
  SubscriptionsEmpty,
  SubscriptionsListItem,
  SubscriptionsListItemSkeleton,
} from '@features/subscriptions/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface SubscriptionsSectionProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  isLoading: boolean;
  subscriptions: Subscription[];
  onViewAllPress: () => void;
  onSubscriptionAddPress: () => void;
}

const SubscriptionsSection = ({
  style,
  total,
  subscriptions,
  onViewAllPress,
  isLoading,
  onSubscriptionAddPress,
}: SubscriptionsSectionProps) => {
  const { t } = useHomeTranslations();
  const isSubscriptionsEmpty = !isLoading && subscriptions.length === 0;

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={[rowCenter, margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Upcoming Subscriptions')}
        </Text>
        {!isSubscriptionsEmpty && (
          <TouchableOpacity
            style={[rowCenter, gap('column')('xxs')]}
            onPress={onViewAllPress}>
            <Text color="tertiary" size="s" weight="medium">
              {`${t('See All')} (${total})`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {isSubscriptionsEmpty ? (
        <SubscriptionsEmpty onAddPress={onSubscriptionAddPress} />
      ) : isLoading ? (
        <SkeletonsList
          itemsCount={3}
          noPadding
          ItemComponent={SubscriptionsListItemSkeleton}
        />
      ) : (
        <View style={gap('row')('xs')}>
          {subscriptions.map((subscription) => (
            <SubscriptionsListItem
              key={subscription.id}
              subscription={subscription}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default SubscriptionsSection;
