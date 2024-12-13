import { ScreenContainer, StatusBar } from '@common/components';
import { SendOtp } from '@features/auth/hoc';
import React from 'react';

const SendOtpScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <SendOtp />
  </ScreenContainer>
);

export default SendOtpScreen;
