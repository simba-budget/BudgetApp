import { Button, FormControl, Input, Text } from '@common/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveInvitationRequest } from '../types';

export interface InvitationFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveInvitationRequest>;
}

const InvitationForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: InvitationFormProps) => {
  const { t } = useInvitationsTranslations();

  return (
    <View style={[padding('horizontal')('l'), padding('top')('m'), style]}>
      <View style={[center, padding('horizontal')('m')]}>
        <Text
          style={margin('bottom')('xxxs')}
          textAlign="center"
          color="primary"
          weight="semiBold"
          size="l">
          {t('Invite Member')}
        </Text>
        <Text
          textAlign="center"
          style={margin('bottom')('l')}
          weight="medium"
          color="tertiary"
          size="s">
          {t('Style object for the card in stack. You can provide a custom color')}
        </Text>
      </View>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('s')}
            isRequired
            error={error?.message}
            label={t('Email')}>
            <Input
              bgColor="secondary"
              autoFocus
              keyboardType="email-address"
              iconName="email"
              autoCapitalize="none"
              readOnly={isDisabled}
              placeholder={t('Email')}
              {...rest}
            />
          </FormControl>
        )}
      />
      <Button
        isSubmitting={isSubmitting}
        onPress={onSubmit}
        size="medium"
        color="primary"
        title={t('Invite')}
      />
    </View>
  );
};

export default InvitationForm;
