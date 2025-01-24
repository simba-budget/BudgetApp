import { SaveAccountRequest } from '@api/clients/accounts/types';
import {
  BottomSheetInput,
  Button,
  FormControl,
  Input,
  Text,
} from '@common/components';
import { CurrenciesSelect } from '@features/currencies/containers';
import { useAccountsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface AccountFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  title: string;
  control: Control<SaveAccountRequest>;
}

const AccountForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
  title,
}: AccountFormProps) => {
  const { t } = useAccountsTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <Text
        style={[padding('horizontal')('m'), margin('bottom')('s')]}
        textAlign="center"
        color="primary"
        weight="semiBold"
        size="l">
        {title}
      </Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Name')}>
            <BottomSheetInput
              style={margin('bottom')('xs')}
              autoFocus
              iconName="profile"
              readOnly={isDisabled}
              placeholder={t('Name')}
              {...rest}
            />
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="currencyId"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('l')}
            error={error?.message}
            label={t('Category')}>
            <CurrenciesSelect label={t('Currency')} {...rest} />
          </FormControl>
        )}
      />
      <Button
        color="primary"
        size="medium"
        isSubmitting={isSubmitting}
        onPress={onSubmit}
        isDisabled={isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default AccountForm;
