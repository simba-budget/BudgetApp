import { Button, FormControl, Input } from '@common/v2/components';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveSubscriptionRequest } from '../types';

export interface SubscriptionFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveSubscriptionRequest>;
}

const SubscriptionForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: SubscriptionFormProps) => {
  const { t } = useSubscriptionsTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Name')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Name')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="day"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Day')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Day')} />
          </FormControl>
        )}
      />
      <Button onPress={onSubmit} isDisabled={isSubmitting || isDisabled} title={t('Save')} />
    </View>
  );
};

export default SubscriptionForm;
