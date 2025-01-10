import { Contribution } from '@api/clients/contributions/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import {
  RootNavigation,
  toContribution,
  toContributionAdd,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'src/common/components';
import { useDebounce } from 'use-debounce';

import { ContributionsList, ContributionsSearch } from '../components';
import { useContributionsInfinity } from '../hooks';
import { selectApiContributionsFilter, selectContributionsSort } from '../selectors';
import { updateKeyword } from '../slice';

export interface ContributionsProps {
  goalId: number;
}

const Contributions = ({ goalId }: ContributionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiContributionsFilter);
  const sort = useAppSelector(selectContributionsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const {
    contributions,
    isLoading,
    isRefetching,
    refetch,
    fetchMore,
    isFetchingMore,
  } = useContributionsInfinity({
    filter: { ...debouncedFilter, goalId },
    sort,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnContributionPress = useCallback(
    (contribution: Contribution) =>
      toContribution(navigation, { id: contribution.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button
          onPress={() => toContributionAdd(navigation, { goalId })}
          title="Add"
        />
      </View>
      <ContributionsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <ContributionsList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        contributions={contributions}
        onContributionPress={handleOnContributionPress}
      />
    </SafeAreaView>
  );
};

export default Contributions;
