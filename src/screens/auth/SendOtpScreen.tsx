import { ScreenContainer, StatusBar } from '@common/v2/components';
import { SendOtp } from '@features/auth/containers';
import React from 'react';

const SendOtpScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <SendOtp />
  </ScreenContainer>
);

export default SendOtpScreen;
