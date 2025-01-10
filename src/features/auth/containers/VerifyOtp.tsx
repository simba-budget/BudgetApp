import React, { useCallback, useState } from 'react';

import { VerifyOtpForm } from '../components';
import { useSendOtp, useVerifyOtp, useVerifyOtpForm } from '../hooks';

export interface VerifyOtpProps {
  email: string;
  expirationDate: string;
}

const VerifyOtp = ({ email, expirationDate }: VerifyOtpProps) => {
  const [newExpirationDate, setNewExpirationDate] = useState<string>(expirationDate);
  const { control, handleSubmit, isValid, reset } = useVerifyOtpForm();
  const { verifyOtp, isSubmitting } = useVerifyOtp(email, { onError: reset });
  const onSuccess = useCallback((data: string) => setNewExpirationDate(data), []);
  const { sendOtp, isSubmitting: isResending } = useSendOtp({ onSuccess });
  const handleOnResend = useCallback(() => sendOtp({ email }), [sendOtp, email]);

  return (
    <VerifyOtpForm
      isValid={isValid}
      email={email}
      onSubmit={handleSubmit(verifyOtp)}
      control={control}
      isSubmitting={isSubmitting}
      expirationDate={newExpirationDate}
      isResending={isResending}
      onResend={handleOnResend}
    />
  );
};

export default VerifyOtp;
