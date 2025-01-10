import { Confirmation } from '@common/components';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteSubscription } from '../hooks';

export interface SubscriptionDeleteProps {
  id: number;
}

const SubscriptionDelete = ({ id }: SubscriptionDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useSubscriptionsTranslations();

  const { deleteSubscription, isSubmitting } = useDeleteSubscription({
    onSuccess: () => pop(2),
  });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteSubscription(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this subscription?')}
    />
  );
};

export default SubscriptionDelete;
