import { MerchantsClient } from '@api/clients';
import { Merchant, SaveMerchantRequest } from '@api/clients/merchants/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useMerchantsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateMerchants } from '../slice';

interface Options {
  onSuccess: (merchant: Merchant) => void;
}

const useEditMerchant = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useMerchantsTranslations();

  const mutationFn = ({ id, ...request }: SaveMerchantRequest & { id: number }) => {
    return MerchantsClient.editMerchant(id, request);
  };

  const { mutateAsync: editMerchant, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Merchant is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateMerchants());
    },
  });

  return { editMerchant, isSubmitting };
};

export default useEditMerchant;
