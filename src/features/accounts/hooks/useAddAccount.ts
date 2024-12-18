import { AccountsClient } from '@api/clients';
import { SaveAccountRequest } from '@api/clients/accounts/types';
import { Account } from '@api/clients/accounts/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useAccountsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateAccounts } from '../slice';

interface Options {
  onSuccess: (account: Account) => void;
}

const useAddAccount = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useAccountsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: AccountsClient.addAccount,
    onSuccess: (response) => {
      showSuccessToast(t('Account is successfully added!'));
      onSuccess(response.data);
      dispatch(updateAccounts());
    },
  });

  const addAccount = (request: SaveAccountRequest) => {
    return mutateAsync(request);
  };

  return { addAccount, isSubmitting };
};

export default useAddAccount;
