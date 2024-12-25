import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TransactionForm } from '../components';
import { useAddTransaction, useTransactionForm } from '../hooks';

const TransactionAdd = () => {
  const { goBack } = useNavigation<MainNavigation>();
  const { handleSubmit, control } = useTransactionForm();
  const { addTransaction, isSubmitting } = useAddTransaction({ onSuccess: goBack });

  return (
    <TransactionForm
      onSubmit={handleSubmit(addTransaction)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default TransactionAdd;
