import { Transaction } from '@api/clients/transactions/types';
import { SectionList } from '@common/components';
import { Section } from '@common/types';
import { useAppSelector } from '@core/store/store';
import React, { useMemo } from 'react';

import { TransactionsListItem } from '../components';
import { useTransactions } from '../hooks';
import { mapTransactionsToDaySections } from '../map';
import { selectTransactionsFilter } from '../selectors';

const Transactions = () => {
  const filter = useAppSelector(selectTransactionsFilter);

  const { transactions, isLoading, isRefetching, refetch } = useTransactions({
    accountId: 4,
    filter,
  });

  const sections = useMemo<Section<Transaction>[]>(
    () => mapTransactionsToDaySections(transactions),
    [transactions],
  );

  return (
    <SectionList<Transaction>
      onRefresh={refetch}
      isRefreshing={isRefetching}
      renderItem={TransactionsListItem}
      isLoading={isLoading}
      sections={sections}
    />
  );
};

export default Transactions;
