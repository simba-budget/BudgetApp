import { Account } from '@api/clients/accounts/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { MainNavigation, toHome } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { selectAccountAction } from '../actions';
import { AccountsList, AccountsSearch } from '../components';
import { useAccountsInfinity } from '../hooks';
import { selectAccountsFilter, selectAccountsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Accounts = () => {
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectAccountsFilter);
  const sort = useAppSelector(selectAccountsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { accounts, isLoading, refetch, isRefetching, fetchMore, isFetchingMore } =
    useAccountsInfinity({
      filter: debouncedFilter,
      sort,
    });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnAccountPress = useCallback(
    async (account: Account) => {
      await dispatch(selectAccountAction(account));
      toHome(navigation);
    },
    [dispatch, navigation],
  );

  return (
    <View style={flex1}>
      <AccountsSearch keyword={filter.keyword} onKeywordChange={handleOnKeywordChange} />
      <AccountsList
        onFetchMore={fetchMore}
        isFetchingMore={isFetchingMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        accounts={accounts}
        onAccountPress={handleOnAccountPress}
      />
    </View>
  );
};

export default Accounts;
