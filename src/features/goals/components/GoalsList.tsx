import { Goal } from '@api/clients/goals/types';
import { FlatList } from '@common/components';
import { justifyCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import GoalsEmpty from './GoalsEmpty';
import GoalsListItem from './GoalsListItem';

export interface GoalsListProps {
  style?: StyleProp<ViewStyle>;
  isRefreshing: boolean;
  onRefresh: () => void;
  goals: Goal[];
  isFetchingMore: boolean;
  onFetchMore: () => void;
  onGoalAddPress: () => void;
  total: number;
}

const GoalsList = ({
  goals,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
  onGoalAddPress,
  total,
}: GoalsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Goal>) => <GoalsListItem goal={item} />,
    [],
  );

  return (
    <FlatList
      contentContainerStyle={[total === 0 && justifyCenter, gap('row')('m')]}
      ListEmptyComponent={<GoalsEmpty onAddPress={onGoalAddPress} />}
      keyExtractor={(goal) => goal.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={goals}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default GoalsList;
