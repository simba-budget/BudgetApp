import { Transaction } from '@api/clients/transactions/types';
import { IconButton, Text } from '@common/v2/components';
import { useAppDispatch } from '@core/store/store';
import { setTransaction } from '@features/transactions/slice';
import { useTransactionsTranslations } from '@i18n/hooks';
import { alignEnd, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React, { useCallback } from 'react';
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
  isDateHidden?: boolean;
}

const TransactionsListItem = ({
  style,
  transaction,
  isDateHidden = false,
}: TransactionsListItemProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTransactionsTranslations();

  const handleOnPress = useCallback(
    () => dispatch(setTransaction({ transaction })),
    [dispatch, transaction],
  );

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handleOnPress}>
      <IconButton iconSize={20} size={40} iconName="card" isDisabled />
      <View style={[flex1, gap('row')('xxs')]}>
        <Text weight="semiBold" size="s" color="primary">
          {transaction.category?.name ?? t('Other')}
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
        {!isDateHidden && (
          <Text weight="medium" size="xs" color="tertiary">
            {formatDate(transaction.date)}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('s'),
    borderRadius: 16,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default TransactionsListItem;
