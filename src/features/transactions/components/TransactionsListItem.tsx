import { Transaction } from '@api/clients/transactions/types';
import { IconButton, Text } from '@common/v2/components';
import { alignEnd, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface TransactionsListItemProps {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
  onPress: () => void;
}

const TransactionsListItem = ({ style, transaction, onPress }: TransactionsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <IconButton iconName="card" />
    <View style={flex1}>
      <Text weight="semiBold" size="s" color="primary">
        {transaction.category.name}
      </Text>
      <Text weight="medium" size="xs" color="tertiary">
        {transaction.description}
      </Text>
    </View>
    <View style={alignEnd}>
      <Text weight="semiBold" size="s" color="primary">
        {formatPrice(transaction.amount, transaction.currency)}
      </Text>
      <Text weight="medium" size="xs" color="tertiary">
        {formatDate(transaction.date)}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('xs'),
    ...gap('column')('s'),
    ...rowCenter,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 8,
  },
});

export default TransactionsListItem;
