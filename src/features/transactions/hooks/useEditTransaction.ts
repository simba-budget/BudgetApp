import { TransactionsClient } from '@api/clients';
import { Transaction } from '@api/clients/transactions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { updateAccounts } from '@features/accounts/slice';
import { useTransactionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTransactions } from '../slice';
import { SaveTransactionRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (transaction: Transaction) => void;
}

const useEditTransaction = ({ onSuccess, accountId }: Options) => {
  const dispatch = useAppDispatch();
  const { t } = useTransactionsTranslations();

  const mutationFn = ({
    id,
    ...request
  }: SaveTransactionRequest & { id: number }) => {
    return TransactionsClient.editTransaction(id, { ...request, accountId });
  };

  const { mutateAsync: editTransaction, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Transaction is successfully updated!'));
      dispatch(updateTransactions());
      dispatch(updateAccounts());
      onSuccess(response.data);
    },
  });

  return { editTransaction, isSubmitting };
};

export default useEditTransaction;
