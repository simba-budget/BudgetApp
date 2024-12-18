import { AccountsClient } from '@api/clients';
import { Account, SaveAccountRequest } from '@api/clients/accounts/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useAccountsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateAccounts } from '../slice';

interface Options {
  onSuccess: (account: Account) => void;
}

const useEditAccount = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useAccountsTranslations();

  const mutationFn = ({ id, ...request }: SaveAccountRequest & { id: number }) => {
    return AccountsClient.editAccount(id, request);
  };

  const { mutateAsync: editAccount, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Account is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateAccounts());
    },
  });

  return { editAccount, isSubmitting };
};

export default useEditAccount;
