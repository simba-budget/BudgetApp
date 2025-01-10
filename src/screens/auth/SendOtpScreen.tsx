import { FormScreenContainer } from '@common/components';
import { SendOtp } from '@features/auth/containers';
import React from 'react';

const SendOtpScreen = () => (
  <FormScreenContainer>
    <SendOtp />
  </FormScreenContainer>
);

export default SendOtpScreen;
