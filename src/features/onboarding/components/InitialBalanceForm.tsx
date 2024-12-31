import { Button, FormControl, Input } from '@common/v2/components';
import { useOnboardingTranslations } from '@i18n/hooks';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { InitialBalanceFormData } from '../types';

export interface InitialBalanceFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isDisabled?: boolean;
  control: Control<InitialBalanceFormData>;
}

const InitialBalanceForm = ({
  style,
  onSubmit,
  control,
  isDisabled = false,
}: InitialBalanceFormProps) => {
  const { t } = useOnboardingTranslations();

  return (
    <View style={[padding('full')('m'), flex1, style]}>
      <View style={flex1}>
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
          name="initialBalance"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl error={error?.message} label={t('Initial balance')}>
              <Input
                {...rest}
                readOnly={isDisabled}
                placeholder={t('Initial balance')}
              />
            </FormControl>
          )}
        />
      </View>
      <View style={padding('bottom')('xl')}>
        <Button onPress={onSubmit} isDisabled={isDisabled} title={t('Save')} />
      </View>
    </View>
  );
};

export default InitialBalanceForm;
