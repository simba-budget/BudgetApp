import { Button, FormControl, Input } from '@common/components';
import { useMerchantsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveMerchantRequest } from '../types';

export interface MerchantFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveMerchantRequest>;
}

const MerchantForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: MerchantFormProps) => {
  const { t } = useMerchantsTranslations();

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
      <Button
        onPress={onSubmit}
        isDisabled={isSubmitting || isDisabled}
        title={t('Save')}
      />
    </View>
  );
};

export default MerchantForm;
