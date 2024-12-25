import { Contribution } from '@api/clients/contributions/types';
import { debounceTime } from '@common/constants';
import { Button } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { toContribution, toContributionAdd } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { ContributionsList, ContributionsSearch } from '../components';
import { useContributions } from '../hooks';
import { selectContributionsFilter } from '../selectors';
import { updateKeyword } from '../slice';

export interface ContributionsProps {
  goalId: number;
}

const Contributions = ({ goalId }: ContributionsProps) => {
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectContributionsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { contributions, isLoading, isRefetching, refetch } = useContributions({
    goalId,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnContributionPress = useCallback(
    (contribution: Contribution) => toContribution(navigation, { id: contribution.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toContributionAdd(navigation, { goalId })} title="Add" />
      </View>
      <ContributionsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <ContributionsList
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
