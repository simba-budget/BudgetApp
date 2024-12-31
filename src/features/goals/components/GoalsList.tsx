import { Goal } from '@api/clients/goals/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

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
}: GoalsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => (
      <GoalsListItem onPress={() => onGoalPress(item)} goal={item} />
    ),
    [onGoalPress],
  );

  return (
    <FlatList
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
