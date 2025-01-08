import { ScreenContainer } from '@common/v2/components';
import { VerifyOtp } from '@features/auth/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type VerifyOtpScreenProps = StaticScreenProps<{
  email: string;
  expirationDate: string;
}>;

const VerifyOtpScreen = ({ route }: VerifyOtpScreenProps) => (
  <ScreenContainer>
    <VerifyOtp {...route.params} />
  </ScreenContainer>
);

export default VerifyOtpScreen;
