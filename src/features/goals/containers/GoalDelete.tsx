import { Confirmation } from '@common/v2/components';
import { useGoalsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteGoal } from '../hooks';

export interface GoalDeleteProps {
  id: number;
}

const GoalDelete = ({ id }: GoalDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useGoalsTranslations();
  const { deleteGoal, isSubmitting } = useDeleteGoal({ onSuccess: () => pop(2) });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteGoal(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this goal?')}
    />
  );
};

export default GoalDelete;
