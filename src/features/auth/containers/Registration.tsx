import { AuthNavigation, toVerifyOtp } from '@navigation/navigators/auth';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';

import { RegistrationForm } from '../components';
import { useRegister, useRegistrationForm } from '../hooks';

const Registration: FC = () => {
  const navigation = useNavigation<AuthNavigation>();

  const onSuccess = useCallback(
    (expirationDate: string, email: string) => {
      toVerifyOtp(navigation, { email, expirationDate });
    },
    [navigation],
  );

  const { control, handleSubmit } = useRegistrationForm();
  const { register, isSubmitting } = useRegister({ onSuccess });

  return (
    <RegistrationForm
      onSubmit={handleSubmit(register)}
      control={control}
      isSubmitting={isSubmitting}
    />
  );
};

export default Registration;
