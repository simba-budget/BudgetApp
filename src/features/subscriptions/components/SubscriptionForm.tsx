import { Button, FormControl, Input } from '@common/components';
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
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Name')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="startedAt"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Started at')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Started at')}
            />
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

export default SubscriptionForm;
