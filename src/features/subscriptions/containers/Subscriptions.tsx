import { Subscription } from '@api/clients/subscriptions/types';
import { debounceTime } from '@common/constants';
import { Button } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { toSubscription, toSubscriptionAdd } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { SubscriptionsList, SubscriptionsSearch } from '../components';
import { useSubscriptions } from '../hooks';
import { selectSubscriptionsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Subscriptions = () => {
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectSubscriptionsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { subscriptions, isLoading, isRefetching, refetch } = useSubscriptions({
    accountId,
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
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toSubscriptionAdd(navigation)} title="Add" />
      </View>
      <SubscriptionsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <SubscriptionsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        subscriptions={subscriptions}
        onSubscriptionPress={handleOnSubscriptionPress}
      />
    </SafeAreaView>
  );
};

export default Subscriptions;
