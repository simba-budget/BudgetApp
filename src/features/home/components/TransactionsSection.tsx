import { Transaction } from '@api/clients/transactions/types';
import { Text } from '@common/v2/components';
import { TransactionsListItem } from '@features/transactions/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

export interface TransactionsSectionProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  transactions: Transaction[];
  onTransactionPress: (transaction: Transaction) => void;
  onViewAllPress: () => void;
}

const TransactionsSection = ({
  style,
  total,
  onTransactionPress,
  transactions,
  onViewAllPress,
}: TransactionsSectionProps) => {
  const { t } = useHomeTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={[rowCenter, margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Recent Transactions')}
        </Text>
        <TouchableOpacity
          style={[rowCenter, gap('column')('xxs')]}
          onPress={onViewAllPress}>
          <Text color="tertiary" size="s" weight="medium">
            {`${t('See All')} (${total})`}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={gap('row')('xs')}>
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
