import { Confirmation } from '@common/v2/components';
import { useTransactionsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { useDeleteTransaction } from '../hooks';

export interface TransactionDeleteProps {
  id: number;
}

const TransactionDelete = ({ id }: TransactionDeleteProps) => {
  const { goBack } = useNavigation<RootNavigation>();
  const { t } = useTransactionsTranslations();

  const { deleteTransaction, isSubmitting } = useDeleteTransaction({
    onSuccess: goBack,
  });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteTransaction(id)}
      title={t('Are you sure that you want to delete this transaction?')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t(
        'Deleting this transaction will delete all related info as tags, categories and merchants.',
      )}
    />
  );
};

export default TransactionDelete;
