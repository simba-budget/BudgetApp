import { SkeletonsList } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { RootNavigation, toGoalAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { GoalsList, GoalsListItemSkeleton } from '../components';
import { useGoalsInfinity } from '../hooks';
import { selectApiGoalsFilter, selectGoalsSort } from '../selectors';

const Goals = () => {
  const navigation = useNavigation<RootNavigation>();
  const filter = useAppSelector(selectApiGoalsFilter);
  const sort = useAppSelector(selectGoalsSort);

  const {
    goals,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore,
    total,
  } = useGoalsInfinity({
    filter,
    sort,
  });

  return (
    <View style={flex1}>
      {isLoading ? (
        <SkeletonsList
          itemsCount={3}
          style={gap('row')('m')}
          ItemComponent={GoalsListItemSkeleton}
        />
      ) : (
        <GoalsList
          total={total}
          onGoalAddPress={() => toGoalAdd(navigation)}
          isFetchingMore={isFetchingMore}
          onFetchMore={fetchMore}
          isRefreshing={isRefetching}
          onRefresh={refetch}
          goals={goals}
        />
      )}
    </View>
  );
};

export default Goals;
