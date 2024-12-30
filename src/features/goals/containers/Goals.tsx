import { Goal } from '@api/clients/goals/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { AccountNavigation, toGoal } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { GoalsList, GoalsSearch } from '../components';
import { useGoals } from '../hooks';
import { selectApiGoalsFilter, selectGoalsPaging } from '../selectors';
import { updateKeyword } from '../slice';

const Goals = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiGoalsFilter);
  const paging = useAppSelector(selectGoalsPaging);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { goals, isLoading, isRefetching, refetch } = useGoals({
    filter: debouncedFilter,
    paging,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnGoalPress = useCallback(
    (goal: Goal) => toGoal(navigation, { id: goal.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <GoalsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <GoalsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        goals={goals}
        onGoalPress={handleOnGoalPress}
      />
    </View>
  );
};

export default Goals;
