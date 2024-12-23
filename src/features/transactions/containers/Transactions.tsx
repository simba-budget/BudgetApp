import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import React from 'react';

import { TransactionsSections } from '../components';
import { useTransactions } from '../hooks';
import { selectTransactionsFilter } from '../selectors';

const Transactions = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectTransactionsFilter);

  const { transactions, isLoading, isRefetching, refetch } = useTransactions({
    accountId,
    filter,
  });

  return (
    <TransactionsSections
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      transactions={transactions}
      onTransactionPress={console.log}
    />
  );
};

export default Transactions;
