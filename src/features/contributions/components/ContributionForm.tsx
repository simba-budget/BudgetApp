import { Button, FormControl, Input } from '@common/v2/components';
import { useContributionsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveContributionRequest } from '../types';

export interface ContributionFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveContributionRequest>;
}

const ContributionForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: ContributionFormProps) => {
  const { t } = useContributionsTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="amount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Amount')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Amount')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="currency"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Currency')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Currency')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Date')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Date')} />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="description"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Description')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Description')} />
          </FormControl>
        )}
      />
      <Button onPress={onSubmit} isDisabled={isSubmitting || isDisabled} title={t('Save')} />
    </View>
  );
};

export default ContributionForm;
