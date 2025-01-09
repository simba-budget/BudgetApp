import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { GoalForm } from '../components';
import { useEditGoal, useGoal, useGoalForm } from '../hooks';
import { mapSaveGoalRequest } from '../map';
import { SaveGoalRequest } from '../types';

export interface GoalEditProps {
  id: number;
}

const GoalEdit = ({ id }: GoalEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { pop } = useNavigation<RootNavigation>();
  const { goal, isLoading } = useGoal(id);
  const { handleSubmit, control, reset } = useGoalForm();
  const { editGoal, isSubmitting } = useEditGoal({ onSuccess: () => pop(2) });

  const handleOnSubmit = (request: SaveGoalRequest) => {
    return editGoal({ id, ...request, accountId });
  };

  useEffect(() => {
    if (goal) reset(mapSaveGoalRequest(goal));
  }, [goal, reset]);

  return (
    <GoalForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default GoalEdit;
