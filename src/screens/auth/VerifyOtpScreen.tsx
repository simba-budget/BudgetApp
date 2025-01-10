import { VerifyOtp } from '@features/auth/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { FormScreenContainer, StatusBar } from 'src/common/components';

export type VerifyOtpScreenProps = StaticScreenProps<{
  email: string;
  expirationDate: string;
}>;

const VerifyOtpScreen = ({ route }: VerifyOtpScreenProps) => (
  <FormScreenContainer>
    <StatusBar translucent={false} />
    <VerifyOtp {...route.params} />
  </FormScreenContainer>
);

export default VerifyOtpScreen;
