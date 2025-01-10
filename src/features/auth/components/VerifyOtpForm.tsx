import { VerifyOtpRequest } from '@api/clients/auth/types';
import { Button, CodeInput, FormControl, Input, Text } from '@common/components';
import { useCountdown } from '@common/hooks';
import { useAuthTranslations } from '@i18n/hooks';
import { center, flex1, fullWidth } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';

export interface VerifyOtpFormProps {
  control: Control<Pick<VerifyOtpRequest, 'otp'>>;
  onSubmit: () => void;
  isSubmitting: boolean;
  email: string;
  isResending: boolean;
  expirationDate: string;
  onResend: () => void;
  isValid: boolean;
}

const VerifyOtpForm = ({
  control,
  isSubmitting,
  onSubmit,
  expirationDate,
  onResend,
  isResending,
  email,
  isValid,
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
          {t('OTP Verification')}
        </Text>
        <Text
          style={margin('bottom')('xl')}
          textAlign="center"
          color="tertiary"
          size="m"
          weight="medium">
          {t('Check your inbox. We sent a code to {{email}}', { email })}
        </Text>
        <Controller
          control={control}
          name="otp"
          render={({ field: { ref: _, ...rest } }) => (
            <FormControl style={fullWidth} isRequired label={t('OTP')}>
              <CodeInput autoFocus onComplete={onSubmit} {...rest} />
            </FormControl>
          )}
        />
      </View>
      {seconds > 0 ? (
        <>
          <Button
            style={margin('bottom')('s')}
            onPress={onSubmit}
            isDisabled={isResending || !isValid}
            isSubmitting={isSubmitting}
            color="primary"
            size="medium"
            title={t('Verify')}
          />
          <Text weight="medium" size="s" color="tertiary" textAlign="center">
            {t('Resend code in {{seconds}}', { seconds: formattedSeconds })}
          </Text>
        </>
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
