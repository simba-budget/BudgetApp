import { SubscriptionsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateSubscriptions } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteSubscription = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useSubscriptionsTranslations();

  const { mutateAsync: deleteSubscription, isPending: isSubmitting } = useMutation({
    mutationFn: SubscriptionsClient.deleteSubscription,
    onSuccess: () => {
      showSuccessToast(t('Subscription is successfully deleted!'));
      dispatch(updateSubscriptions());
      onSuccess();
    },
  });

  return { deleteSubscription, isSubmitting };
};

export default useDeleteSubscription;
