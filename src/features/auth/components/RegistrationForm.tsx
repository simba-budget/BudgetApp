import { RegisterRequest } from '@api/clients/auth/types';
import {
  Button,
  Checkbox,
  FormControl,
  Input,
  ScrollView,
  TextBody,
  TextHeading,
  TransTextBody,
  View,
} from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { toTermsAndConditions } from '@navigation/actions';
import { RootNavigation, sendOtpRoute } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { margin } from '@styles/lightTheme';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';

import AuthFooter from './AuthFooter';
import SocialLogins from './SocialLogins';

export interface SignInFormProps {
  style?: StyleProp<ViewStyle>;
  control: Control<RegisterRequest>;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const RegistrationForm: FC<SignInFormProps> = (props) => {
  const { style, control, isSubmitting, onSubmit } = props;
  const { t } = useAuthTranslations();
  const navigation = useNavigation<RootNavigation>();

  return (
    <View flex1 pt="s" style={style}>
      <ScrollView>
        <View gap="s">
          <TextHeading size="xxl">{t('Create an account')}</TextHeading>
          <TextBody color="secondary">
            {t('Fill your information below or register with your social account')}
          </TextBody>
        </View>
        <View gap="m">
          <Controller
            control={control}
            name="email"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message} isRequired label={t('Email')}>
                <Input
                  {...rest}
                  isError={!!error}
                  keyboardType="email-address"
                  iconName="email"
                  placeholder="john.doe@gmail.com"
                />
              </FormControl>
            )}
          />
          <View gap="s" direction="row">
            <Controller
              control={control}
              name="firstName"
              render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
                <FormControl
                  error={error?.message}
                  isRequired
                  style={flex1}
                  label={t('First name')}>
                  <Input {...rest} isError={!!error} iconName="profile" placeholder="John" />
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
                <FormControl
                  error={error?.message}
                  isRequired
                  style={flex1}
                  label={t('Last name')}>
                  <Input {...rest} isError={!!error} iconName="profile" placeholder="Doe" />
                </FormControl>
              )}
            />
          </View>
          <Controller
            control={control}
            name="isAgreementChecked"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl error={error?.message}>
                <Checkbox {...rest}>
                  <TransTextBody
                    size="xs"
                    ns="auth"
                    onHighlightedPress={() => toTermsAndConditions(navigation)}
                    i18nKey="Agree with terms and conditions"
                  />
                </Checkbox>
              </FormControl>
            )}
          />
        </View>
      </ScrollView>
      <View ph="l" isBottomSafe pb="l" gap="s">
        <Button
          style={margin('bottom')('s')}
          variant="primary"
          size="medium"
          onPress={onSubmit}
          isLoading={isSubmitting}
          title={t('Sign up')}
        />
        <SocialLogins
          label="Already have an account? Sign In"
          route={sendOtpRoute}
          dividerText={t('Or sign up with')}
        />
        <AuthFooter />
      </View>
    </View>
  );
};

export default RegistrationForm;
