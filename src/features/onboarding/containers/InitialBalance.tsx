import { useAppDispatch } from '@core/store/store';
import { OnboardingNavigation, toInitialInvitations } from '@navigation/navigators/onboarding';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { InitialBalanceForm } from '../components';
import { useInitialBalanceForm } from '../hooks';
import { updateInitialBalanceFormData } from '../slice';
import { InitialBalanceFormData } from '../types';

const InitialBalance = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<OnboardingNavigation>();
  const { handleSubmit, control } = useInitialBalanceForm();

  const handleOnSubmit = (formData: InitialBalanceFormData) => {
    dispatch(updateInitialBalanceFormData(formData));
    toInitialInvitations(navigation);
  };

  return <InitialBalanceForm onSubmit={handleSubmit(handleOnSubmit)} control={control} />;
};

export default InitialBalance;
