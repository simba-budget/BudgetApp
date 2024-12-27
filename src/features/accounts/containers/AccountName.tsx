import { toAccountBalance } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { AccountNameForm } from '../components';
import { useAccountNameForm } from '../hooks';
import { AccountNameFormData } from '../types';

const AccountName = () => {
  const navigation = useNavigation<MainNavigation>();
  const { handleSubmit, control } = useAccountNameForm();

  const handleOnSubmit = (formData: AccountNameFormData) => {
    toAccountBalance(navigation, { data: formData });
  };

  return <AccountNameForm onSubmit={handleSubmit(handleOnSubmit)} control={control} />;
};

export default AccountName;
