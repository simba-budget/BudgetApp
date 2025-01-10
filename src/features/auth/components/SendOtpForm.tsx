import { SendOtpRequest } from '@api/clients/auth/types';
import { Button, FormControl, Input, Text } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { registrationRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { center, flex1, fullWidth, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';

export interface SignInFormProps {
  control: Control<SendOtpRequest>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isValid: boolean;
}

const SendOtpForm = ({
  control,
  isSubmitting,
  onSubmit,
  isValid,
}: SignInFormProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useAuthTranslations();

  return (
    <View style={[flex1, padding('horizontal')('m'), padding('top')('l')]}>
      <View style={[flex1, center]}>
        <Text
          textAlign="center"
          style={margin('bottom')('xs')}
          color="primary"
          weight="bold"
          size="xxl">
          {t('Welcome Back')}
        </Text>
        <Text
          textAlign="center"
          color="tertiary"
          size="m"
          weight="medium"
          style={margin('bottom')('xl')}>
          {t('We happy to see you again! Sign in to continue')}
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { ref: _, ...rest } }) => (
            <FormControl style={fullWidth} isRequired label={t('Email')}>
              <Input
                {...rest}
                autoComplete="email"
                autoFocus
                autoCorrect={false}
                keyboardType="email-address"
                iconName="email"
                autoCapitalize="none"
                placeholder={t('Email')}
              />
            </FormControl>
          )}
        />
      </View>
      <Button
        isDisabled={!isValid}
        style={margin('bottom')('s')}
        onPress={onSubmit}
        isSubmitting={isSubmitting}
        color="primary"
        size="medium"
        title={t('Sign In')}
      />
      <View style={[rowCenter, center, gap('column')('xxs')]}>
        <Text weight="medium" size="s" color="tertiary" textAlign="center">
          {t('Don’t have an account?')}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate(registrationRoute)}>
          <Text weight="semiBold" size="s" color="primary" textAlign="center">
            {t('Sign Up')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendOtpForm;
