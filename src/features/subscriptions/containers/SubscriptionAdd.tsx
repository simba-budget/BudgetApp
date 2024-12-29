import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { SubscriptionForm } from '../components';
import { useAddSubscription, useSubscriptionForm } from '../hooks';

const SubscriptionAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
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
