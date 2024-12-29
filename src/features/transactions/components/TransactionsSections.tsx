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
}

const TransactionsSections = ({
  onTransactionPress,
  transactions,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: TransactionsSectionsProps) => {
  const sections = useMemo<Section<Transaction>[]>(
    () => mapTransactionsToDaySections(transactions),
    [transactions],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Transaction>) => (
      <TransactionsListItem onPress={() => onTransactionPress(item)} transaction={item} />
    ),
    [onTransactionPress],
  );

  return (
    <SectionList
      onRefresh={onRefresh}
      style={style}
      sections={sections}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default TransactionsSections;
