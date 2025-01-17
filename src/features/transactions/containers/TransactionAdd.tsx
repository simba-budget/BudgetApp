import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TransactionForm } from '../components';
import { useAddTransaction, useTransactionForm } from '../hooks';

const TransactionAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useTransactionForm();

  const { addTransaction, isSubmitting } = useAddTransaction({
    onSuccess: goBack,
    accountId,
  });

  return (
    <TransactionForm
      onSubmit={handleSubmit(addTransaction)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default TransactionAdd;
