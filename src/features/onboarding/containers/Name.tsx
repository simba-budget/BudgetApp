import { useAppDispatch } from '@core/store/store';
import {
  OnboardingNavigation,
  toInitialBalance,
} from '@navigation/navigators/onboarding';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { NameForm } from '../components';
import { useNameForm } from '../hooks';
import { updateNameFormData } from '../slice';
import { NameFormData } from '../types';

const Name = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<OnboardingNavigation>();
  const { handleSubmit, control } = useNameForm();

  const handleOnSubmit = (formData: NameFormData) => {
    dispatch(updateNameFormData(formData));
    toInitialBalance(navigation);
  };

  return <NameForm onSubmit={handleSubmit(handleOnSubmit)} control={control} />;
};

export default Name;
