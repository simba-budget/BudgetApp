import { Button, FormControl, IconButton, Input, Text } from '@common/v2/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { center, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
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
  onClose: () => void;
}

const InvitationForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  onClose,
  isDisabled = false,
}: InvitationFormProps) => {
  const { t } = useInvitationsTranslations();

  return (
    <View
      style={[
        padding('horizontal')('m'),
        padding('top')('m'),
        gap('row')('l'),
        style,
      ]}>
      <View style={[gap('row')('xs'), center, padding('horizontal')('m')]}>
        <IconButton
          color="primary"
          size={64}
          iconSize={32}
          iconName="userPlus"
          isDisabled
        />
        <Text color="primary" weight="semiBold" textAlign="center" size="l">
          {t('Invite member')}
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
          <FormControl isRequired error={error?.message} label={t('Email')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Email')} />
          </FormControl>
        )}
      />
      <View style={gap('row')('xs')}>
        <Button
          isDisabled={isSubmitting}
          onPress={onSubmit}
          size="medium"
          color="primary"
          title={t('Invite')}
        />
        <Button
          isDisabled={isSubmitting}
          onPress={onClose}
          size="medium"
          color="tertiary"
          title={t('Cancel')}
        />
      </View>
    </View>
  );
};

export default InvitationForm;
