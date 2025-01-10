import { ActionItem } from '@common/components/Actions';
import { useTransactionsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  transactionDeleteRoute,
  transactionEditRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { Actions } from 'src/common/components';

export interface TransactionActionsProps {
  id: number;
}

const TransactionActions = ({ id }: TransactionActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useTransactionsTranslations();

  const items = useMemo<ActionItem[]>(
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

  return <Actions items={items} title={t('Transaction Actions')} />;
};

export default TransactionActions;
