import { SkeletonsList } from '@common/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { RootNavigation, toSubscriptionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import {
  SubscriptionsList,
  SubscriptionsListItemSkeleton,
  SubscriptionsSearch,
} from '../components';
import { useSubscriptionsInfinity } from '../hooks';
import { selectApiSubscriptionsFilter, selectSubscriptionsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Subscriptions = () => {
  const dispatch = useAppDispatch();
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

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <View style={flex1}>
      <SubscriptionsSearch
        style={margin('bottom')('s')}
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      {isLoading ? (
        <SkeletonsList
          style={padding('top')('xxs')}
          ItemComponent={SubscriptionsListItemSkeleton}
        />
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
