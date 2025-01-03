import { MerchantsClient } from '@api/clients';
import { Merchant } from '@api/clients/merchants/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useMerchantsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateMerchants } from '../slice';
import { SaveMerchantRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (merchant: Merchant) => void;
}

const useAddMerchant = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();
  const { t } = useMerchantsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: MerchantsClient.addMerchant,
    onSuccess: (response) => {
      showSuccessToast(t('Merchant is successfully added!'));
      onSuccess(response.data);
      dispatch(updateMerchants());
    },
  });

  const addMerchant = (request: SaveMerchantRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addMerchant, isSubmitting };
};

export default useAddMerchant;
