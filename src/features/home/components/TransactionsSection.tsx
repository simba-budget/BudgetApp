import { Transaction } from '@api/clients/transactions/types';
import { Svg, Text } from '@common/v2/components';
import { TransactionsListItem } from '@features/transactions/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface TransactionsSectionProps {
  style?: StyleProp<ViewStyle>;
  transactions: Transaction[];
  onTransactionPress: (transaction: Transaction) => void;
  onViewAllPress: () => void;
}

const TransactionsSection = ({
  style,
  onTransactionPress,
  transactions,
  onViewAllPress,
}: TransactionsSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[gap('row')('s'), style]}>
      <View style={rowCenter}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Recent Transactions')}
        </Text>
        <TouchableOpacity style={[rowCenter, gap('column')('xxs')]} onPress={onViewAllPress}>
          <Text color="accent" size="xs" weight="semiBold">
            {t('View All')}
          </Text>
          <Svg color={colors.text.accent} size={18} name="arrowRight" />
        </TouchableOpacity>
      </View>
      <View style={gap('row')('s')}>
        {transactions.map((transaction) => (
          <TransactionsListItem
            key={transaction.id}
            transaction={transaction}
            onPress={() => onTransactionPress(transaction)}
          />
        ))}
      </View>
    </View>
  );
};

export default TransactionsSection;
