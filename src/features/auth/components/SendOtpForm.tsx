import { SendOtpRequest } from '@api/clients/auth/types';
import {
  Button,
  FormControl,
  Input,
  ScrollView,
  TextBody,
  TextHeading,
  View,
} from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { registrationRoute } from '@navigation/types';
import { flex1 } from '@styles/common';
import { margin } from '@styles/lightTheme';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import AuthFooter from './AuthFooter';
import SocialLogins from './SocialLogins';

export interface SignInFormProps {
  style?: StyleProp<ViewStyle>;
  control: Control<SendOtpRequest>;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const SendOtpForm: FC<SignInFormProps> = (props) => {
  const { style, control, isSubmitting, onSubmit } = props;
  const { t } = useAuthTranslations();

  return (
    <View flex1 pt="s" style={style}>
      <ScrollView gap="xl">
        <View gap="s">
          <TextHeading size="xxl">{t('Welcome Back')}</TextHeading>
          <TextBody>
            {t('We happy to see you again! to use your account, you should sign in first')}
          </TextBody>
        </View>
        <Controller
          control={control}
          name="email"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl style={flex1} error={error?.message} isRequired label={t('Email')}>
              <Input
                {...rest}
                isError={!!error}
                keyboardType="email-address"
                iconName="email"
                placeholder={t('Email')}
              />
            </FormControl>
          )}
        />
      </ScrollView>
      <View ph="l" isBottomSafe pb="l" gap="s">
        <Button
          onPress={onSubmit}
          isLoading={isSubmitting}
          style={margin('bottom')('s')}
          variant="primary"
          size="medium"
          title={t('Verify')}
        />
        <SocialLogins
          label="Don’t have an account? Sign Up"
          route={registrationRoute}
          dividerText={t('Or sign in with')}
        />
        <AuthFooter />
      </View>
    </View>
  );
};

export default SendOtpForm;
