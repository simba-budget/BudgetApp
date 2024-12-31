import { Subscription } from '@api/clients/subscriptions/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { AccountNavigation, toSubscription } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { SubscriptionsList, SubscriptionsSearch } from '../components';
import { useSubscriptionsInfinity } from '../hooks';
import { selectApiSubscriptionsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Subscriptions = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiSubscriptionsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { subscriptions, isLoading, isRefetching, refetch } = useSubscriptionsInfinity({
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnSubscriptionPress = useCallback(
    (subscription: Subscription) => toSubscription(navigation, { id: subscription.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <SubscriptionsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <SubscriptionsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        subscriptions={subscriptions}
        onSubscriptionPress={handleOnSubscriptionPress}
      />
    </View>
  );
};

export default Subscriptions;
