import { Goal } from '@api/clients/goals/types';
import { FlatList } from '@common/v2/components';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import GoalsEmpty from './GoalsEmpty';
import GoalsListItem from './GoalsListItem';

export interface GoalsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  goals: Goal[];
  onGoalPress: (goal: Goal) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
  onGoalAddPress: () => void;
}

const GoalsList = ({
  onGoalPress,
  goals,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
  onGoalAddPress,
}: GoalsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => (
      <GoalsListItem onPress={() => onGoalPress(item)} goal={item} />
    ),
    [onGoalPress],
  );

  return (
    <FlatList
      ListEmptyComponent={<GoalsEmpty onAddPress={onGoalAddPress} />}
      contentContainerStyle={gap('row')('m')}
      keyExtractor={(goal) => goal.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={goals}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default GoalsList;
