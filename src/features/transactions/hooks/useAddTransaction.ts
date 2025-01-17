import { TransactionsClient } from '@api/clients';
import { Transaction } from '@api/clients/transactions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useTransactionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTransactions } from '../slice';
import { SaveTransactionRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (transaction: Transaction) => void;
}

const useAddTransaction = ({ onSuccess, accountId }: Options) => {
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
    return mutateAsync({ ...request, accountId });
  };

  return { addTransaction, isSubmitting };
};

export default useAddTransaction;
