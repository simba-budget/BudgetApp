import { TransactionsClient } from '@api/clients';
import {
  SaveTransactionRequest,
  Transaction,
} from '@api/clients/transactions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useTransactionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTransactions } from '../slice';

interface Options {
  onSuccess: (transaction: Transaction) => void;
}

const useAddTransaction = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useTransactionsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: TransactionsClient.addTransaction,
    onSuccess: (response) => {
      showSuccessToast(t('Transaction is successfully added!'));
      onSuccess(response.data);
      dispatch(updateTransactions());
    },
  });

  const addTransaction = (request: SaveTransactionRequest) => {
    return mutateAsync(request);
  };

  return { addTransaction, isSubmitting };
};

export default useAddTransaction;
