import { Transaction } from '@api/clients/transactions/types';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface TransactionsListItemProps {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
  onPress: () => void;
}

const TransactionsListItem = ({ style, transaction, onPress }: TransactionsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <Text>{JSON.stringify(transaction, null, 2)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 12,
  },
});

export default TransactionsListItem;
