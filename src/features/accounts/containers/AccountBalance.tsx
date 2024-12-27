import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { AccountBalanceForm } from '../components';
import { useAccountBalanceForm } from '../hooks';
import { AccountBalanceFormData, AccountNameFormData } from '../types';

export interface AccountBalanceProps {
  data: AccountNameFormData;
}

const AccountBalance = ({ data }: AccountBalanceProps) => {
  const navigation = useNavigation<MainNavigation>();
  const { handleSubmit, control } = useAccountBalanceForm();

  const handleOnSubmit = (formData: AccountBalanceFormData) => {
    console.log('data', data);
    console.log('formData', formData);
    console.log('navigation', navigation);
  };

  return <AccountBalanceForm onSubmit={handleSubmit(handleOnSubmit)} control={control} />;
};

export default AccountBalance;
