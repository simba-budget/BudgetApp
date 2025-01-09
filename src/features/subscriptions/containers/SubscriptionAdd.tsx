import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SubscriptionForm } from '../components';
import { useAddSubscription, useSubscriptionForm } from '../hooks';

const SubscriptionAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useSubscriptionForm();

  const { addSubscription, isSubmitting } = useAddSubscription({
    onSuccess: goBack,
    accountId,
  });

  return (
    <SubscriptionForm
      onSubmit={handleSubmit(addSubscription)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default SubscriptionAdd;
