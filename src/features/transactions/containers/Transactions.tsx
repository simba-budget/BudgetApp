import { Transaction } from '@api/clients/transactions/types';
import { Button } from '@common/v2/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { toTransaction, toTransactionAdd } from '@navigation/actions';
import { AccountNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { padding } from '@styles/lightTheme';
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
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toTransactionAdd(navigation)} title="Add" />
      </View>
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
