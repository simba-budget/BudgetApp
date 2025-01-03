import { Transaction } from '@api/clients/transactions/types';
import { Section } from '@common/types';
import { SectionList } from '@common/v2/components';
import { justifyCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
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
  onTransactionPress: (transaction: Transaction) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
  onTransactionAddPress: () => void;
  total: number;
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
  onTransactionAddPress,
  total,
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
      contentContainerStyle={[total === 0 && justifyCenter, gap('row')('m')]}
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
