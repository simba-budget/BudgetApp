import { AccountNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { AccountForm } from '../components';
import { useAccountForm, useAddAccount } from '../hooks';

const AccountAdd = () => {
  const { goBack } = useNavigation<AccountNavigation>();
  const { handleSubmit, control } = useAccountForm();
  const { addAccount, isSubmitting } = useAddAccount({ onSuccess: goBack });

  return (
    <AccountForm
      onSubmit={handleSubmit(addAccount)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default AccountAdd;
