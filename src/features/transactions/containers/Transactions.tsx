import { SkeletonsSections } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccount } from '@features/accounts/selectors';
import { RootNavigation, toTransactionAdd } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React from 'react';
import { View } from 'react-native';

import { TransactionsListItemSkeleton, TransactionsSections } from '../components';
import { useTransactionsInfinity } from '../hooks';
import { selectApiTransactionsFilter, selectTransactionsSort } from '../selectors';

const Transactions = () => {
  const navigation = useNavigation<RootNavigation>();
  const account = useAppSelector(selectSelectedAccount);
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

  if (!account) return null;

  return (
    <View style={flex1}>
      {isLoading ? (
        <SkeletonsSections
          isSubtitleVisible
          ItemComponent={TransactionsListItemSkeleton}
        />
      ) : (
        <TransactionsSections
          total={total}
          onTransactionAddPress={() => toTransactionAdd(navigation)}
          onFetchMore={fetchMore}
          isFetchingMore={isFetchingMore}
          isRefreshing={isRefetching}
          onRefresh={refetch}
          transactions={transactions}
          baseCurrency={account.currency}
        />
      )}
    </View>
  );
};

export default Transactions;
