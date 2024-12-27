import { Button, FormControl, Input } from '@common/v2/components';
import { useAccountsTranslations } from '@i18n/hooks';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { AccountNameFormData } from '../types';

export interface AccountNameFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isDisabled?: boolean;
  control: Control<AccountNameFormData>;
}

const AccountNameForm = ({
  style,
  onSubmit,
  control,
  isDisabled = false,
}: AccountNameFormProps) => {
  const { t } = useAccountsTranslations();

  return (
    <View style={[padding('full')('m'), flex1, style]}>
      <View style={flex1}>
        <Controller
          control={control}
          name="name"
          render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
            <FormControl error={error?.message} label={t('Name')}>
              <Input {...rest} readOnly={isDisabled} placeholder={t('Name')} />
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

export default AccountNameForm;
