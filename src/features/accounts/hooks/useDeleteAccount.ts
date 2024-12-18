import { AccountsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useAccountsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateAccounts } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteAccount = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useAccountsTranslations();

  const { mutateAsync: deleteAccount, isPending: isSubmitting } = useMutation({
    mutationFn: AccountsClient.deleteAccount,
    onSuccess: () => {
      showSuccessToast(t('Account is successfully deleted!'));
      dispatch(updateAccounts());
      onSuccess();
    },
  });

  return { deleteAccount, isSubmitting };
};

export default useDeleteAccount;
