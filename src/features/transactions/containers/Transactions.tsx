import { useAppSelector } from '@core/store/store';
import { RootNavigation, toTransactionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TransactionsSections } from '../components';
import { useTransactionsInfinity } from '../hooks';
import { selectApiTransactionsFilter, selectTransactionsSort } from '../selectors';

const Transactions = () => {
  const navigation = useNavigation<RootNavigation>();
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
    />
  );
};

export default Transactions;
