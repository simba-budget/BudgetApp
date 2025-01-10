import { Transaction } from '@api/clients/transactions/types';
import { SectionList } from '@common/components';
import { Section } from '@common/types';
import { justifyCenter } from '@styles/common';
import React, { useCallback, useMemo } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { mapTransactionsToDaySections } from '../map';

import TransactionsEmpty from './TransactionsEmpty';
import TransactionsListItem from './TransactionsListItem';

export interface TransactionsSectionsProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  transactions: Transaction[];
  isFetchingMore: boolean;
  onFetchMore: () => void;
  total: number;
  onTransactionAddPress: () => void;
}

const TransactionsSections = ({
  transactions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  isFetchingMore,
  onFetchMore,
  total,
  onTransactionAddPress,
}: TransactionsSectionsProps) => {
  const sections = useMemo<Section<Transaction>[]>(
    () => mapTransactionsToDaySections(transactions),
    [transactions],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Transaction>) => (
      <TransactionsListItem isDateHidden transaction={item} />
    ),
    [],
  );

  return (
    <SectionList
      contentContainerStyle={[total === 0 && justifyCenter]}
      ListEmptyComponent={<TransactionsEmpty onAddPress={onTransactionAddPress} />}
      keyExtractor={(transaction) => transaction.id.toString()}
      onRefresh={onRefresh}
      style={style}
      sections={sections}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
    />
  );
};

export default TransactionsSections;
