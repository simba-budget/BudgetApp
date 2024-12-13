import React, { FC, useCallback, useState } from 'react';

import { VerifyOtpForm } from '../components';
import { useSendOtp, useVerifyOtp, useVerifyOtpForm } from '../hooks';

export interface VerifyOtpProps {
  email: string;
  expirationDate: string;
}

const VerifyOtp: FC<VerifyOtpProps> = (props) => {
  const { email, expirationDate } = props;
  const [newExpirationDate, setNewExpirationDate] = useState<string>(expirationDate);
  const { verifyOtp, isSubmitting } = useVerifyOtp(email);
  const { control, handleSubmit } = useVerifyOtpForm();
  const onSuccess = useCallback((data: string) => setNewExpirationDate(data), []);
  const { sendOtp, isSubmitting: isResending } = useSendOtp({ onSuccess });
  const handleOnResend = useCallback(() => sendOtp({ email }), [sendOtp, email]);

  return (
    <VerifyOtpForm
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
