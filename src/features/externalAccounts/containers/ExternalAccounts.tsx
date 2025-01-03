import { ExternalAccount } from '@api/clients/externalAccounts/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import {
  AccountNavigation,
  toExternalAccount,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { ExternalAccountsList, ExternalAccountsSearch } from '../components';
import { useExternalAccountsInfinity } from '../hooks';
import {
  selectApiExternalAccountsFilter,
  selectExternalAccountsSort,
} from '../selectors';
import { updateKeyword } from '../slice';

const ExternalAccounts = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiExternalAccountsFilter);
  const sort = useAppSelector(selectExternalAccountsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const {
    externalAccounts,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore,
  } = useExternalAccountsInfinity({
    filter: debouncedFilter,
    sort,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnExternalAccountPress = useCallback(
    (externalAccount: ExternalAccount) =>
      toExternalAccount(navigation, { id: externalAccount.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <ExternalAccountsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <ExternalAccountsList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        externalAccounts={externalAccounts}
        onExternalAccountPress={handleOnExternalAccountPress}
      />
    </View>
  );
};

export default ExternalAccounts;
