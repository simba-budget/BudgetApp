import { SendOtp } from '@features/auth/containers';
import React from 'react';
import { FormScreenContainer, StatusBar } from 'src/common/components';

const SendOtpScreen = () => (
  <FormScreenContainer>
    <StatusBar translucent={false} />
    <SendOtp />
  </FormScreenContainer>
);

export default SendOtpScreen;
