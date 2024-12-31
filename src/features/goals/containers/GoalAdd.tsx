import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { GoalForm } from '../components';
import { useAddGoal, useGoalForm } from '../hooks';

const GoalAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
  const { handleSubmit, control } = useGoalForm();
  const { addGoal, isSubmitting } = useAddGoal({ onSuccess: goBack, accountId });

  return (
    <GoalForm
      onSubmit={handleSubmit(addGoal)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default GoalAdd;
