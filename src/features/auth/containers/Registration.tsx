import { RootNavigation, verifyOtpRoute } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { RegistrationForm } from '../components';
import { useRegister, useRegistrationForm } from '../hooks';

const Registration = () => {
  const navigation = useNavigation<RootNavigation>();

  const onSuccess = useCallback(
    (expirationDate: string, email: string) => {
      navigation.navigate(verifyOtpRoute, { email, expirationDate });
    },
    [navigation],
  );

  const { control, handleSubmit, isValid } = useRegistrationForm();
  const { register, isSubmitting } = useRegister({ onSuccess });

  return (
    <RegistrationForm
      isValid={isValid}
      onSubmit={handleSubmit(register)}
      control={control}
      isSubmitting={isSubmitting}
    />
  );
};

export default Registration;
