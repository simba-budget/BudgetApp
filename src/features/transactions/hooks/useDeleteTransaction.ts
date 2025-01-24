import { TransactionsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { updateAccounts } from '@features/accounts/slice';
import { useTransactionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTransactions } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteTransaction = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useTransactionsTranslations();

  const { mutateAsync: deleteTransaction, isPending: isSubmitting } = useMutation({
    mutationFn: TransactionsClient.deleteTransaction,
    onSuccess: () => {
      showSuccessToast(t('Transaction is successfully deleted!'));
      dispatch(updateTransactions());
      dispatch(updateAccounts());
      onSuccess();
    },
  });

  return { deleteTransaction, isSubmitting };
};

export default useDeleteTransaction;
