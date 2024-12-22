import { Transaction } from '@api/clients/transactions/types';
import { IconButton, TextBody, TextHeading, View } from '@common/components';
import { formatDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TransactionsListItemProps {
  style?: StyleProp<ViewStyle>;
  item: Transaction;
}

const TransactionsListItem = ({ style, item }: TransactionsListItemProps) => (
  <View style={style} direction="row" align="center" gap="s">
    <IconButton isDisabled size="medium" variant="primary" iconName="card" />
    <View flex1 gap="xxs">
      <TextHeading weight="bold">{item.description}</TextHeading>
      <TextBody color="tertiary" size="xs">
        {item.category.name}
      </TextBody>
    </View>
    <View gap="xxs">
      <TextHeading color={item.amount >= 0 ? 'success' : 'error'} textAlign="right">
        {formatPrice(item.amount, item.currency)}
      </TextHeading>
      <TextBody color="tertiary" textAlign="right" size="xs">
        {formatDate(item.date)}
      </TextBody>
    </View>
  </View>
);

export default TransactionsListItem;
