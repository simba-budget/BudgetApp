import { useTransactionsTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Confirmation } from 'src/common/components';

import { useDeleteTransaction } from '../hooks';

export interface TransactionDeleteProps {
  id: number;
}

const TransactionDelete = ({ id }: TransactionDeleteProps) => {
  const { goBack, pop } = useNavigation<RootNavigation>();
  const { t } = useTransactionsTranslations();

  const { deleteTransaction, isSubmitting } = useDeleteTransaction({
    onSuccess: () => pop(2),
  });

  return (
    <Confirmation
      type="danger"
      onClose={goBack}
      onConfirm={() => deleteTransaction(id)}
      title={t('Delete Confirmation')}
      isSubmitting={isSubmitting}
      confirmText={t('Delete')}
      description={t('Are you sure that you want to delete this transaction?')}
    />
  );
};

export default TransactionDelete;
