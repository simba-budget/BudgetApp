import { FormScreenContainer } from '@common/components';
import { VerifyOtp } from '@features/auth/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type VerifyOtpScreenProps = StaticScreenProps<{
  email: string;
  expirationDate: string;
}>;

const VerifyOtpScreen = ({ route }: VerifyOtpScreenProps) => (
  <FormScreenContainer>
    <VerifyOtp {...route.params} />
  </FormScreenContainer>
);

export default VerifyOtpScreen;
