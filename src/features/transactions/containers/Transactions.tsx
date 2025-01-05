import { Transaction } from '@api/clients/transactions/types';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { setTransaction } from '@features/transactions/slice';
import { AccountNavigation, toTransactionAdd } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { TransactionsSections } from '../components';
import { useTransactionsInfinity } from '../hooks';
import { selectApiTransactionsFilter, selectTransactionsSort } from '../selectors';

const Transactions = () => {
  const dispatch = useAppDispatch();
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
    (transaction: Transaction) => dispatch(setTransaction({ transaction })),
    [dispatch],
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
