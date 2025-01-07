import { Transaction } from '@api/clients/transactions/types';
import { useAppDispatch } from '@core/store/store';
import { useTransactionsTranslations } from '@i18n/hooks';
import { PickerOption, usePicker } from '@libs/picker';
import {
  AccountNavigation,
  toTransactionEdit,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo } from 'react';

import { setTransaction } from '../slice';

const useTransactionActions = (transaction: Transaction) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AccountNavigation>();
  const { t } = useTransactionsTranslations();
  const { onOpen } = usePicker();

  const handleOnViewPress = useCallback(
    () => dispatch(setTransaction({ transaction })),
    [dispatch, transaction],
  );

  const options = useMemo<PickerOption[]>(
    () => [
      {
        iconName: 'eye',
        title: t('View'),
        onPress: handleOnViewPress,
      },
      {
        iconName: 'edit',
        title: t('Edit'),
        onPress: () => toTransactionEdit(navigation, { id: transaction.id }),
      },
      {
        iconName: 'delete',
        title: t('Delete'),
        onPress: () => toTransactionEdit(navigation, { id: transaction.id }),
        color: 'error',
      },
    ],
    [transaction.id, t, navigation, handleOnViewPress],
  );

  return {
    onLongPress: () => onOpen(options),
    onPress: handleOnViewPress,
  };
};

export default useTransactionActions;
