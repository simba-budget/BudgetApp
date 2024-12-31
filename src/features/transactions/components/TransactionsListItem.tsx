import { Transaction } from '@api/clients/transactions/types';
import { Svg, Text } from '@common/v2/components';
import { alignEnd, center, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatPrice } from '@utils/price';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import { getRandomIcon } from '../utils';

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
      <Svg color={colors.text.primary} size={18} name={getRandomIcon()} />
    </View>
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
  iconContainer: {
    ...center,
    backgroundColor: colors.background.tertiary,
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});

export default TransactionsListItem;
