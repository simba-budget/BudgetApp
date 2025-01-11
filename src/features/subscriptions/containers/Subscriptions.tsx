import { SkeletonsList } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { RootNavigation, toSubscriptionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React from 'react';
import { View } from 'react-native';

import { SubscriptionsList, SubscriptionsListItemSkeleton } from '../components';
import { useSubscriptionsInfinity } from '../hooks';
import { selectApiSubscriptionsFilter, selectSubscriptionsSort } from '../selectors';

const Subscriptions = () => {
  const navigation = useNavigation<RootNavigation>();
  const filter = useAppSelector(selectApiSubscriptionsFilter);
  const sort = useAppSelector(selectSubscriptionsSort);

  const {
    subscriptions,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore,
    total,
  } = useSubscriptionsInfinity({
    filter,
    sort,
  });

  return (
    <View style={flex1}>
      {isLoading ? (
        <SkeletonsList ItemComponent={SubscriptionsListItemSkeleton} />
      ) : (
        <SubscriptionsList
          total={total}
          onSubscriptionAddPress={() => toSubscriptionAdd(navigation)}
          isFetchingMore={isFetchingMore}
          onFetchMore={fetchMore}
          isRefreshing={isRefetching}
          onRefresh={refetch}
          subscriptions={subscriptions}
        />
      )}
    </View>
  );
};

export default Subscriptions;
