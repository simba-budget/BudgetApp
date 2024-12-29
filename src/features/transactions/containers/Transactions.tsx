import { Transaction } from '@api/clients/transactions/types';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation, toTransaction } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { TransactionsSections } from '../components';
import { useTransactions } from '../hooks';
import { selectTransactionsFilter } from '../selectors';

const Transactions = () => {
  const navigation = useNavigation<AccountNavigation>();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectTransactionsFilter);

  const { transactions, isLoading, isRefetching, refetch } = useTransactions({
    accountId,
    filter,
  });

  const handleOnTransactionPress = useCallback(
    (transaction: Transaction) => toTransaction(navigation, { id: transaction.id }),
    [navigation],
  );

  return (
    <View>
      <TransactionsSections
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        transactions={transactions}
        onTransactionPress={handleOnTransactionPress}
      />
    </View>
  );
};

export default Transactions;
