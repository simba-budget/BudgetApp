import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { SubscriptionForm } from '../components';
import { useEditSubscription, useSubscription, useSubscriptionForm } from '../hooks';
import { mapSaveSubscriptionRequest } from '../map';
import { SaveSubscriptionRequest } from '../types';

export interface SubscriptionEditProps {
  id: number;
}

const SubscriptionEdit = ({ id }: SubscriptionEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
  const { subscription, isLoading } = useSubscription(id);
  const { handleSubmit, control, reset } = useSubscriptionForm();
  const { editSubscription, isSubmitting } = useEditSubscription({
    onSuccess: goBack,
  });

  const handleOnSubmit = (request: SaveSubscriptionRequest) => {
    return editSubscription({ id, ...request, accountId });
  };

  useEffect(() => {
    if (subscription) reset(mapSaveSubscriptionRequest(subscription));
  }, [subscription, reset]);

  return (
    <SubscriptionForm
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default SubscriptionEdit;
