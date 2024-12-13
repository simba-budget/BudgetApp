import { ScreenContainer, StatusBar } from '@common/components';
import { VerifyOtp } from '@features/auth/hoc';
import { VerifyOtpScreenProps } from '@navigation/types';
import React from 'react';

const VerifyOtpScreen = ({ route }: VerifyOtpScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <VerifyOtp {...route.params} />
  </ScreenContainer>
);

export default VerifyOtpScreen;
