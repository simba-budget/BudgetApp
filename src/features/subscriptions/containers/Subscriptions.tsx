import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { RootNavigation, toSubscriptionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { SubscriptionsList, SubscriptionsSearch } from '../components';
import { useSubscriptionsInfinity } from '../hooks';
import { selectApiSubscriptionsFilter, selectSubscriptionsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Subscriptions = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiSubscriptionsFilter);
  const sort = useAppSelector(selectSubscriptionsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const {
    subscriptions,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore,
    total,
  } = useSubscriptionsInfinity({
    filter: debouncedFilter,
    sort,
  });

  const isSubscriptionsEmpty = total === 0 && !filter?.keyword;

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <View style={flex1}>
      {!isSubscriptionsEmpty && (
        <SubscriptionsSearch
          onKeywordChange={handleOnKeywordChange}
          keyword={filter?.keyword}
        />
      )}
      <SubscriptionsList
        total={total}
        onSubscriptionAddPress={() => toSubscriptionAdd(navigation)}
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        subscriptions={subscriptions}
      />
    </View>
  );
};

export default Subscriptions;
