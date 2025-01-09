import { Action, Text } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Action';
import { useTransactionsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  transactionDeleteRoute,
  transactionEditRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

export interface TransactionActionsProps {
  id: number;
}

const TransactionActions = ({ id }: TransactionActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useTransactionsTranslations();

  const actionItems = useMemo<ActionItem[]>(
    () => [
      {
        title: t('Change Category'),
        iconName: 'squaresPlus',
        description: t('Change transaction category'),
        onPress: () => navigation.push(transactionEditRoute, { id }),
      },
      {
        title: t('Update Tags'),
        iconName: 'chart',
        description: t('Add or remove category tags'),
        onPress: () => navigation.push(transactionEditRoute, { id }),
      },
      {
        title: t('Mark as Subscription'),
        iconName: 'chart',
        description: t('Make similar transactions as subscription'),
        onPress: () => navigation.push(transactionEditRoute, { id }),
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit transaction details'),
        onPress: () => navigation.push(transactionEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete transaction'),
        onPress: () => navigation.push(transactionDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return (
    <View
      style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('xs')]}>
      <Text
        style={margin('bottom')('s')}
        textAlign="center"
        color="primary"
        size="m"
        weight="semiBold">
        {t('Transaction Actions')}
      </Text>
      {actionItems.map((item, index) => (
        <Action key={index} item={item} />
      ))}
    </View>
  );
};

export default TransactionActions;
