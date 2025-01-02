import { Transaction } from '@api/clients/transactions/types';
import { Section } from '@common/types';
import { SectionList } from '@common/v2/components';
import React, { useCallback, useMemo } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import { mapTransactionsToDaySections } from '../map';

import TransactionsListItem from './TransactionsListItem';

export interface TransactionsSectionsProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  transactions: Transaction[];
  onTransactionPress: (transaction: Transaction) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const TransactionsSections = ({
  onTransactionPress,
  transactions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  isFetchingMore,
  onFetchMore,
}: TransactionsSectionsProps) => {
  const sections = useMemo<Section<Transaction>[]>(
    () => mapTransactionsToDaySections(transactions),
    [transactions],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Transaction>) => (
      <TransactionsListItem
        isDateHidden
        onPress={() => onTransactionPress(item)}
        transaction={item}
      />
    ),
    [onTransactionPress],
  );

  return (
    <SectionList
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
