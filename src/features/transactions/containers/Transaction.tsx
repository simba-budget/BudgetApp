import { toTransactionEdit } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { TransactionDetails } from '../components';
import { useTransaction } from '../hooks';

export interface TransactionProps {
  id: number;
}

const Transaction = ({ id }: TransactionProps) => {
  const navigation = useNavigation<MainNavigation>();
  const { transaction, refetch, isRefetching, isLoading } = useTransaction(id);

  const handleOnEditPress = useCallback(
    () => toTransactionEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <TransactionDetails
      transaction={transaction}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Transaction;
