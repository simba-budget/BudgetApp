import { Subscription } from '@api/clients/subscriptions/types';
import { justifyCenter } from '@styles/common';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'src/common/components';

import SubscriptionsEmpty from './SubscriptionsEmpty';
import SubscriptionsListItem from './SubscriptionsListItem';

export interface SubscriptionsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
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
  isLoading,
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
      contentContainerStyle={[total === 0 && justifyCenter]}
      ListEmptyComponent={<SubscriptionsEmpty onAddPress={onSubscriptionAddPress} />}
      keyExtractor={(subscription) => subscription.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={subscriptions}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default SubscriptionsList;
