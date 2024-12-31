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

const useEditTransaction = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useTransactionsTranslations();

  const mutationFn = ({
    id,
    ...request
  }: SaveTransactionRequest & { id: number }) => {
    return TransactionsClient.editTransaction(id, request);
  };

  const { mutateAsync: editTransaction, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Transaction is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateTransactions());
    },
  });

  return { editTransaction, isSubmitting };
};

export default useEditTransaction;
