import { Transaction } from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import {
  AccountNavigation,
  toTransaction,
  toTransactionAdd,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { justifyCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback } from 'react';

import { TransactionsSections } from '../components';
import { useTransactionsInfinity } from '../hooks';
import { selectApiTransactionsFilter, selectTransactionsSort } from '../selectors';

const Transactions = () => {
  const navigation = useNavigation<AccountNavigation>();
  const filter = useAppSelector(selectApiTransactionsFilter);
  const sort = useAppSelector(selectTransactionsSort);

  const {
    transactions,
    isLoading,
    isRefetching,
    refetch,
    fetchMore,
    isFetchingMore,
    total,
  } = useTransactionsInfinity({
    filter,
    sort,
  });

  const handleOnTransactionPress = useCallback(
    (transaction: Transaction) => toTransaction(navigation, { id: transaction.id }),
    [navigation],
  );

  return (
    <TransactionsSections
      total={total}
      onTransactionAddPress={() => toTransactionAdd(navigation)}
      onFetchMore={fetchMore}
      isFetchingMore={isFetchingMore}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      transactions={transactions}
      onTransactionPress={handleOnTransactionPress}
    />
  );
};

export default Transactions;
