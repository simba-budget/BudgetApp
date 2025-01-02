import { Transaction } from '@api/clients/transactions/types';
import { Svg, Text } from '@common/v2/components';
import { alignEnd, center, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface TransactionsListItemProps {
  style?: StyleProp<ViewStyle>;
  transaction: Transaction;
  onPress: () => void;
}

const TransactionsListItem = ({
  style,
  transaction,
  onPress,
}: TransactionsListItemProps) => (
  <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Svg color={colors.text.primary} size={20} name="card" />
    </View>
    <View style={[flex1, gap('row')('xxs')]}>
      <Text weight="semiBold" size="s" color="primary">
        {transaction.category.name}
      </Text>
      <Text numberOfLines={1} weight="semiBold" size="xs" color="tertiary">
        {transaction.description}
      </Text>
    </View>
    <View style={[alignEnd, gap('row')('xxs')]}>
      <Text
        weight="bold"
        size="s"
        color={transaction.amount < 0 ? 'error' : 'success'}>
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
    ...padding('full')('s'),
    ...gap('column')('s'),
    ...rowCenter,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
  iconContainer: {
    ...center,
    backgroundColor: colors.background.tertiary,
    width: 42,
    height: 42,
    borderRadius: 21,
  },
});

export default TransactionsListItem;
