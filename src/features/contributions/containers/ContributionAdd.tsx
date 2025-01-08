import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { ContributionForm } from '../components';
import { useAddContribution, useContributionForm } from '../hooks';

export interface ContributionAddProps {
  goalId: number;
}

const ContributionAdd = ({ goalId }: ContributionAddProps) => {
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useContributionForm();

  const { addContribution, isSubmitting } = useAddContribution({
    onSuccess: goBack,
    goalId,
  });

  return (
    <ContributionForm
      onSubmit={handleSubmit(addContribution)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default ContributionAdd;
