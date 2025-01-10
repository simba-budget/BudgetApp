import { Transaction } from '@api/clients/transactions/types';
import {
  TransactionsEmpty,
  TransactionsListItem,
} from '@features/transactions/components';
import { useHomeTranslations } from '@i18n/hooks';
import { flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from 'src/common/components';

export interface TransactionsSectionProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  transactions: Transaction[];
  onViewAllPress: () => void;
  isLoading: boolean;
  onTransactionAddPress: () => void;
}

const TransactionsSection = ({
  style,
  total,
  transactions,
  onViewAllPress,
  onTransactionAddPress,
  isLoading,
}: TransactionsSectionProps) => {
  const { t } = useHomeTranslations();
  const isTransactionsEmpty = !isLoading && transactions.length === 0;

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={[rowCenter, margin('bottom')('xs')]}>
        <Text style={flex1} color="primary" size="s" weight="semiBold">
          {t('Recent Transactions')}
        </Text>
        {!isTransactionsEmpty && (
          <TouchableOpacity
            style={[rowCenter, gap('column')('xxs')]}
            onPress={onViewAllPress}>
            <Text color="tertiary" size="s" weight="medium">
              {`${t('See All')} (${total})`}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {isTransactionsEmpty ? (
        <TransactionsEmpty onAddPress={onTransactionAddPress} />
      ) : (
        <View style={gap('row')('xs')}>
          {transactions.map((transaction) => (
            <TransactionsListItem key={transaction.id} transaction={transaction} />
          ))}
        </View>
      )}
    </View>
  );
};

export default TransactionsSection;
