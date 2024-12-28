import { SubscriptionsClient } from '@api/clients';
import { Subscription } from '@api/clients/subscriptions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateSubscriptions } from '../slice';
import { SaveSubscriptionRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (subscription: Subscription) => void;
}

const useAddSubscription = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();
  const { t } = useSubscriptionsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: SubscriptionsClient.addSubscription,
    onSuccess: (response) => {
      showSuccessToast(t('Subscription is successfully added!'));
      onSuccess(response.data);
      dispatch(updateSubscriptions());
    },
  });

  const addSubscription = (request: SaveSubscriptionRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addSubscription, isSubmitting };
};

export default useAddSubscription;
