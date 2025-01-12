import { Subscription } from '@api/clients/subscriptions/types';
import { FlatList } from '@common/components';
import { justifyCenter } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import SubscriptionsEmpty from './SubscriptionsEmpty';
import SubscriptionsListItem from './SubscriptionsListItem';

export interface SubscriptionsListProps {
  style?: StyleProp<ViewStyle>;
  isRefreshing: boolean;
  onRefresh: () => void;
  subscriptions: Subscription[];
  isFetchingMore: boolean;
  onFetchMore: () => void;
  onSubscriptionAddPress: () => void;
  total: number;
}

const SubscriptionsList = ({
  subscriptions,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
  onSubscriptionAddPress,
  total,
}: SubscriptionsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Subscription>) => (
      <SubscriptionsListItem subscription={item} />
    ),
    [],
  );

  return (
    <FlatList
      contentContainerStyle={[
        total === 0 && justifyCenter,
        padding('top')('xxs'),
        padding('bottom')('m'),
      ]}
      ListEmptyComponent={<SubscriptionsEmpty onAddPress={onSubscriptionAddPress} />}
      keyExtractor={(subscription) => subscription.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={subscriptions}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default SubscriptionsList;
