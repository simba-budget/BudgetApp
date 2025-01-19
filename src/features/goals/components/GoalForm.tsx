import { Button, FormControl, Input } from '@common/components';
import { useGoalsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveGoalRequest } from '../types';

export interface GoalFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveGoalRequest>;
}

const GoalForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: GoalFormProps) => {
  const { t } = useGoalsTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="initialAmount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Initial amount')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Initial amount')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="targetAmount"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Target amount')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Target amount')}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="currencyId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Currency')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Currency')}
            />
          </FormControl>
        )}
      />
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
        name="description"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Description')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Description')}
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
      <Controller
        control={control}
        name="endAt"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('End at')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('End at')}
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

export default GoalForm;
