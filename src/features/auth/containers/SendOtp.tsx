import { RootNavigation, toVerifyOtp } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { SendOtpForm } from '../components';
import { useSendOtp, useSendOtpForm } from '../hooks';

const SendOtp = () => {
  const navigation = useNavigation<RootNavigation>();

  const onSuccess = useCallback(
    (expirationDate: string, email: string) =>
      toVerifyOtp(navigation, { email, expirationDate }),
    [navigation],
  );

  const { sendOtp, isSubmitting } = useSendOtp({ onSuccess });
  const { control, handleSubmit } = useSendOtpForm();

  return (
    <SendOtpForm
      onSubmit={handleSubmit(sendOtp)}
      control={control}
      isSubmitting={isSubmitting}
    />
  );
};

export default SendOtp;
