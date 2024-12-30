import { Transaction } from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import { AccountNavigation, toTransaction } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { TransactionsSections } from '../components';
import { useTransactions } from '../hooks';
import {
  selectApiTransactionsFilter,
  selectTransactionsPaging,
  selectTransactionsSort,
} from '../selectors';

const Transactions = () => {
  const navigation = useNavigation<AccountNavigation>();
  const filter = useAppSelector(selectApiTransactionsFilter);
  const paging = useAppSelector(selectTransactionsPaging);
  const sort = useAppSelector(selectTransactionsSort);

  const { transactions, isLoading, isRefetching, refetch } = useTransactions({
    filter,
    sort,
    paging,
  });

  const handleOnTransactionPress = useCallback(
    (transaction: Transaction) => toTransaction(navigation, { id: transaction.id }),
    [navigation],
  );

  return (
    <TransactionsSections
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      transactions={transactions}
      onTransactionPress={handleOnTransactionPress}
    />
  );
};

export default Transactions;
