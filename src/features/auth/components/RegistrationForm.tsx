import { RegisterRequest } from '@api/clients/auth/types';
import { useAuthTranslations } from '@i18n/hooks';
import { sendOtpRoute } from '@navigation/navigators/root';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { center, flex1, fullWidth, row, rowCenter, selfStart } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { Button, Checkbox, FormControl, Input, Text } from 'src/common/components';

export interface SignInFormProps {
  control: Control<RegisterRequest>;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const RegistrationForm = ({ control, isSubmitting, onSubmit }: SignInFormProps) => {
  const { t } = useAuthTranslations();
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={[flex1, padding('horizontal')('m'), padding('top')('l')]}>
      <View style={[flex1, center]}>
        <Text
          textAlign="center"
          style={margin('bottom')('xs')}
          color="primary"
          weight="bold"
          size="xxl">
          {t('Create an account')}
        </Text>
        <Text
          textAlign="center"
          color="tertiary"
          size="m"
          weight="medium"
          style={margin('bottom')('xl')}>
          {t('Fill your information below or register with your social account')}
        </Text>
        <View style={[row, margin('bottom')('s'), gap('column')('xs')]}>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl
                style={flex1}
                error={error?.message}
                isRequired
                label={t('First name')}>
                <Input
                  {...rest}
                  autoComplete="name-given"
                  autoFocus
                  autoCorrect={false}
                  iconName="profile"
                  placeholder={t('First name')}
                />
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="lastName"
            render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
              <FormControl
                style={flex1}
                error={error?.message}
                isRequired
                label={t('Last name')}>
                <Input
                  {...rest}
                  autoComplete="name-family"
                  autoCorrect={false}
                  iconName="profile"
                  placeholder={t('Last name')}
                />
              </FormControl>
            )}
          />
        </View>
        <Controller
          control={control}
          name="email"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl
              style={[fullWidth, margin('bottom')('m')]}
              error={error?.message}
              isRequired
              label={t('Email')}>
              <Input
                {...rest}
                autoComplete="email"
                keyboardType="email-address"
                iconName="email"
                autoCapitalize="none"
                placeholder={t('Email')}
              />
            </FormControl>
          )}
        />
        <Controller
          control={control}
          name="isAgreementChecked"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl style={selfStart} error={error?.message}>
              <Checkbox {...rest}>
                <Text color="primary" size="s" weight="medium">
                  {t('Agree with terms and conditions')}
                </Text>
              </Checkbox>
            </FormControl>
          )}
        />
      </View>
      <Button
        style={margin('bottom')('s')}
        onPress={onSubmit}
        isSubmitting={isSubmitting}
        color="primary"
        size="medium"
        title={t('Sign Up')}
      />
      <View style={[rowCenter, center, gap('column')('xxs')]}>
        <Text weight="medium" size="s" color="tertiary" textAlign="center">
          {t('Already have an account?')}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(sendOtpRoute)}>
          <Text weight="semiBold" size="s" color="primary" textAlign="center">
            {t('Sign In')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationForm;
