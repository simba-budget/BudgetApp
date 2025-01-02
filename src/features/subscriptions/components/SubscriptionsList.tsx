import { Subscription } from '@api/clients/subscriptions/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import SubscriptionsListItem from './SubscriptionsListItem';

export interface SubscriptionsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  subscriptions: Subscription[];
  onSubscriptionPress: (subscription: Subscription) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const SubscriptionsList = ({
  onSubscriptionPress,
  subscriptions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
}: SubscriptionsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Subscription>) => (
      <SubscriptionsListItem
        onPress={() => onSubscriptionPress(item)}
        subscription={item}
      />
    ),
    [onSubscriptionPress],
  );

  return (
    <FlatList
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
