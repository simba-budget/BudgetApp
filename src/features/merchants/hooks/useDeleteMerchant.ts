import { MerchantsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useMerchantsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateMerchants } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteMerchant = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useMerchantsTranslations();

  const { mutateAsync: deleteMerchant, isPending: isSubmitting } = useMutation({
    mutationFn: MerchantsClient.deleteMerchant,
    onSuccess: () => {
      showSuccessToast(t('Merchant is successfully deleted!'));
      dispatch(updateMerchants());
      onSuccess();
    },
  });

  return { deleteMerchant, isSubmitting };
};

export default useDeleteMerchant;
