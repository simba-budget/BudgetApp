import { toContributions, toGoalEdit } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { GoalDetails } from '../components';
import { useGoal } from '../hooks';

export interface GoalProps {
  id: number;
}

const Goal = ({ id }: GoalProps) => {
  const navigation = useNavigation<MainNavigation>();
  const { goal, refetch, isRefetching, isLoading } = useGoal(id);

  const handleOnContributionsPress = useCallback(
    () => toContributions(navigation, { goalId: id }),
    [navigation, id],
  );

  const handleOnEditPress = useCallback(
    () => toGoalEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <GoalDetails
      goal={goal}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onContributionsPress={handleOnContributionsPress}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Goal;
