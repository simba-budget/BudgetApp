import { VerifyOtpRequest } from '@api/clients/auth/types';
import {
  Button,
  FormControl,
  Input,
  ScrollView,
  TextHeading,
  TransTextBody,
  View,
} from '@common/components';
import { useCountdown } from '@common/hooks';
import { useAuthTranslations } from '@i18n/hooks';
import { sizes } from '@styles/lightTheme';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import AuthFooter from './AuthFooter';

export interface VerifyOtpFormProps {
  style?: StyleProp<ViewStyle>;
  control: Control<Pick<VerifyOtpRequest, 'otp'>>;
  onSubmit: () => void;
  isSubmitting: boolean;
  email: string;
  isResending: boolean;
  expirationDate: string;
  onResend: () => void;
}

const VerifyOtpForm: FC<VerifyOtpFormProps> = (props) => {
  const {
    style,
    control,
    isSubmitting,
    onSubmit,
    expirationDate,
    onResend,
    isResending,
    email,
  } = props;

  const { t } = useAuthTranslations();
  const seconds = useCountdown(expirationDate);

  return (
    <View flex1 pt="s" style={style}>
      <ScrollView gap="l">
        <View gap="s">
          <TextHeading size="xxl">{t('Verify OTP')}</TextHeading>
          <TransTextBody
            values={{ email }}
            i18nKey="Please enter the OTP we just sent to provided email: {{email}}"
            ns="auth"
            weight="regular"
            color="secondary"
          />
        </View>
        {seconds > 0 && (
          <>
            <Controller
              control={control}
              name="otp"
              render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
                <FormControl error={error?.message} isRequired label={t('OTP')}>
                  <Input
                    {...rest}
                    isError={!!error}
                    keyboardType="number-pad"
                    iconName="lock"
                    placeholder={t('OTP')}
                  />
                </FormControl>
              )}
            />
            <View
              br={sizes.s}
              pv="l"
              bgColor="lightGrey500"
              align="center"
              justify="center">
              <TextHeading color="highlightPrimary" size="xxl" textAlign="center">
                {`00:${seconds.toString().padStart(2, '0')}`}
              </TextHeading>
            </View>
            <Button
              isLoading={isSubmitting}
              variant="primary"
              size="medium"
              onPress={onSubmit}
              title={t('Verify')}
            />
          </>
        )}
        {seconds <= 0 && (
          <Button
            isDisabled={isSubmitting}
            variant="primary"
            size="medium"
            onPress={onResend}
            isLoading={isResending}
            title={t('Resend OTP')}
          />
        )}
      </ScrollView>
      <View ph="l" isBottomSafe pb="l">
        <AuthFooter />
      </View>
    </View>
  );
};

export default VerifyOtpForm;
