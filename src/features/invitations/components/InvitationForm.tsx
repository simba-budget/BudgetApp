import { Button, FormControl, IconButton, Input, Text } from '@common/v2/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { selfCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
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
      <IconButton
        style={[selfCenter, margin('bottom')('s')]}
        color="primary"
        size={56}
        iconSize={28}
        iconName="userPlus"
        isDisabled
      />
      <View style={[gap('row')('xxs'), margin('bottom')('xl')]}>
        <Text color="primary" weight="semiBold" textAlign="center" size="m">
          {t('Invite Member')}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="s">
          {t(
            'Style object for the card in stack. You can provide a custom background color',
          )}
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
