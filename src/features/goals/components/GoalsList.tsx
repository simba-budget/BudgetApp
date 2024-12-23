import { Goal } from '@api/clients/goals/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import GoalsListItem from './GoalsListItem';

export interface GoalsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  goals: Goal[];
  onGoalPress: (goal: Goal) => void;
}

const GoalsList = ({
  onGoalPress,
  goals,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: GoalsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => (
      <GoalsListItem onPress={() => onGoalPress(item)} goal={item} />
    ),
    [onGoalPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={goals}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default GoalsList;
