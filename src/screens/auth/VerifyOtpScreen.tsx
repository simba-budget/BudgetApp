import { ScreenContainer, StatusBar } from '@common/v2/components';
import { VerifyOtp } from '@features/auth/containers';
import { VerifyOtpScreenProps } from '@navigation/navigators/auth';
import React from 'react';

const VerifyOtpScreen = ({ route }: VerifyOtpScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <VerifyOtp {...route.params} />
  </ScreenContainer>
);

export default VerifyOtpScreen;
