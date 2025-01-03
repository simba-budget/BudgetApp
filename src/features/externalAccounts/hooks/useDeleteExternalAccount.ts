import { ExternalAccountsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useExternalAccountsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateExternalAccounts } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteExternalAccount = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useExternalAccountsTranslations();

  const { mutateAsync: deleteExternalAccount, isPending: isSubmitting } =
    useMutation({
      mutationFn: ExternalAccountsClient.deleteExternalAccount,
      onSuccess: () => {
        showSuccessToast(t('External account is successfully deleted!'));
        dispatch(updateExternalAccounts());
        onSuccess();
      },
    });

  return { deleteExternalAccount, isSubmitting };
};

export default useDeleteExternalAccount;
