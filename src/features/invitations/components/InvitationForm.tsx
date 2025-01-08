import { Button, FormControl, Input } from '@common/v2/components';
import { useGoalsTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
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
  const { t } = useGoalsTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <Controller
        control={control}
        name="email"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl isRequired error={error?.message} label={t('Email')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Email')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="role"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl isRequired error={error?.message} label={t('Role')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Role')} />
          </FormControl>
        )}
      />
      <Button
        onPress={onSubmit}
        isDisabled={isSubmitting || isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default InvitationForm;
