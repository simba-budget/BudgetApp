import { SubscriptionsClient } from '@api/clients';
import { SaveSubscriptionRequest, Subscription } from '@api/clients/subscriptions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateSubscriptions } from '../slice';

interface Options {
  onSuccess: (subscription: Subscription) => void;
}

const useEditSubscription = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useSubscriptionsTranslations();

  const mutationFn = ({ id, ...request }: SaveSubscriptionRequest & { id: number }) => {
    return SubscriptionsClient.editSubscription(id, request);
  };

  const { mutateAsync: editSubscription, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Subscription is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateSubscriptions());
    },
  });

  return { editSubscription, isSubmitting };
};

export default useEditSubscription;
