import { VerifyOtpRequest } from '@api/clients/auth/types';
import { useCountdown } from '@common/hooks';
import { useAuthTranslations } from '@i18n/hooks';
import { center, flex1, fullWidth } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { Button, FormControl, Input, Text } from 'src/common/components';

export interface VerifyOtpFormProps {
  control: Control<Pick<VerifyOtpRequest, 'otp'>>;
  onSubmit: () => void;
  isSubmitting: boolean;
  email: string;
  isResending: boolean;
  expirationDate: string;
  onResend: () => void;
}

const VerifyOtpForm = ({
  control,
  isSubmitting,
  onSubmit,
  expirationDate,
  onResend,
  isResending,
  email,
}: VerifyOtpFormProps) => {
  const { t } = useAuthTranslations();
  const seconds = useCountdown(expirationDate);
  const formattedSeconds = `00:${Math.max(seconds, 0).toString().padStart(2, '0')}`;

  return (
    <View style={[flex1, padding('horizontal')('m'), padding('top')('l')]}>
      <View style={[flex1, center]}>
        <Text
          textAlign="center"
          style={margin('bottom')('xs')}
          color="primary"
          weight="bold"
          size="xxl">
          {t('Verify OTP')}
        </Text>
        <Text
          style={margin('bottom')('xl')}
          textAlign="center"
          color="tertiary"
          size="m"
          weight="medium">
          {t('Please enter the OTP we just sent to provided email: {{email}}', {
            email,
          })}
        </Text>
        <Controller
          control={control}
          name="otp"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl
              style={fullWidth}
              error={error?.message}
              isRequired
              label={t('OTP')}>
              <Input
                {...rest}
                keyboardType="number-pad"
                iconName="lock"
                placeholder={t('OTP')}
              />
            </FormControl>
          )}
        />
      </View>
      <Button
        style={margin('bottom')('xs')}
        onPress={onSubmit}
        isDisabled={isResending}
        isSubmitting={isSubmitting}
        color="primary"
        size="medium"
        title={t('Verify')}
      />
      {seconds > 0 ? (
        <Text weight="medium" size="s" color="tertiary" textAlign="center">
          {t('Resend code in {{seconds}}', { seconds: formattedSeconds })}
        </Text>
      ) : (
        <Button
          onPress={onResend}
          size="medium"
          color="tertiary"
          title={t('Resend Code')}
          isSubmitting={isResending}
          isDisabled={seconds > 0}
        />
      )}
    </View>
  );
};

export default VerifyOtpForm;
