import { Transaction } from '@api/clients/transactions/types';
import { useTransactionsTranslations } from '@i18n/hooks';
import { PickerOption, usePicker } from '@libs/picker';
import {
  RootNavigation,
  toTransaction,
  toTransactionDelete,
  toTransactionEdit,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';

const useTransactionActions = (transaction: Transaction) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useTransactionsTranslations();
  const { onOpen } = usePicker();

  const options = useMemo<PickerOption[]>(
    () => [
      {
        iconName: 'eye',
        title: t('View'),
        onPress: () => toTransaction(navigation, { id: transaction.id }),
      },
      {
        iconName: 'edit',
        title: t('Edit'),
        onPress: () => toTransactionEdit(navigation, { id: transaction.id }),
      },
      {
        iconName: 'delete',
        title: t('Delete'),
        onPress: () => toTransactionDelete(navigation, { id: transaction.id }),
        color: 'error',
      },
    ],
    [transaction.id, t, navigation],
  );

  return {
    onLongPress: () => onOpen(options),
    onPress: () => toTransaction(navigation, { id: transaction.id }),
  };
};

export default useTransactionActions;
