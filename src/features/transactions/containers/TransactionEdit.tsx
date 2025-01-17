import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { TransactionForm } from '../components';
import { useEditTransaction, useTransaction, useTransactionForm } from '../hooks';
import { mapSaveTransactionRequest } from '../map';
import { SaveTransactionRequest } from '../types';

export interface TransactionEditProps {
  id: number;
}

const TransactionEdit = ({ id }: TransactionEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { transaction, isLoading } = useTransaction(id);
  const { handleSubmit, control, reset } = useTransactionForm();

  const { editTransaction, isSubmitting } = useEditTransaction({
    onSuccess: goBack,
    accountId,
  });

  const handleOnSubmit = (request: SaveTransactionRequest) => {
    return editTransaction({ id, ...request });
  };

  useEffect(() => {
    if (transaction) reset(mapSaveTransactionRequest(transaction));
  }, [transaction, reset]);

  return (
    <TransactionForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default TransactionEdit;
