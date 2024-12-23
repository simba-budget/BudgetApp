import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';

import { ContributionsList, ContributionsSearch } from '../components';
import { useContributions } from '../hooks';
import { selectContributionsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Contributions = () => {
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectContributionsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { contributions, isLoading, isRefetching, refetch } = useContributions({
    accountId,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <SafeAreaView style={flex1}>
      <ContributionsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <ContributionsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        contributions={contributions}
        onContributionPress={console.log}
      />
    </SafeAreaView>
  );
};

export default Contributions;
