import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { ContributionForm } from '../components';
import { useContribution, useContributionForm, useEditContribution } from '../hooks';
import { mapSaveContributionRequest } from '../map';
import { SaveContributionRequest } from '../types';

export interface ContributionEditProps {
  id: number;
}

const ContributionEdit = ({ id }: ContributionEditProps) => {
  const { goBack } = useNavigation<RootNavigation>();
  const { contribution, isLoading } = useContribution(id);
  const { handleSubmit, control, reset } = useContributionForm();
  const { editContribution, isSubmitting } = useEditContribution({
    onSuccess: goBack,
  });

  const handleOnSubmit = (request: SaveContributionRequest) => {
    if (!contribution) return;
    return editContribution({ id, ...request, goalId: contribution.goalId });
  };

  useEffect(() => {
    if (contribution) reset(mapSaveContributionRequest(contribution));
  }, [contribution, reset]);

  return (
    <ContributionForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading || !contribution}
    />
  );
};

export default ContributionEdit;
