import { SaveAccountRequest } from '@api/clients/accounts/types';
import { Button, FormControl, Input } from '@common/components';
import { useAccountsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface AccountFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveAccountRequest>;
}

const AccountForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: AccountFormProps) => {
  const { t } = useAccountsTranslations();

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
        name="type"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Type')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Type')}
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

export default AccountForm;
