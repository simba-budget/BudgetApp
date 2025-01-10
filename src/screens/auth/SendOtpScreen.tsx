import { FormScreenContainer, StatusBar } from '@common/components';
import { SendOtp } from '@features/auth/containers';
import React from 'react';

const SendOtpScreen = () => (
  <FormScreenContainer>
    <StatusBar translucent={false} />
    <SendOtp />
  </FormScreenContainer>
);

export default SendOtpScreen;
