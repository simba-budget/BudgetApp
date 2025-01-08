import { Button, FormControl, Input } from '@common/v2/components';
import { useCategoriesTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveCategoryRequest } from '../types';

export interface CategoryFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveCategoryRequest>;
}

const CategoryForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: CategoryFormProps) => {
  const { t } = useCategoriesTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Name')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Name')} />
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

export default CategoryForm;
