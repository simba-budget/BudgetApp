import { Button, FormControl, Input, Text } from '@common/components';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useCategoriesTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
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
  title: string;
  isValid: boolean;
}

const CategoryForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  title,
  isValid,
  isDisabled = false,
}: CategoryFormProps) => {
  const { t } = useCategoriesTranslations();

  return (
    <View style={[padding('horizontal')('l'), style]}>
      <View style={[center, padding('horizontal')('m'), margin('bottom')('l')]}>
        <Text
          style={margin('bottom')('xxxs')}
          textAlign="center"
          color="primary"
          weight="semiBold"
          size="l">
          {title}
        </Text>
        <Text textAlign="center" weight="medium" color="tertiary" size="s">
          {t('Style object for the card in stack. You can provide a custom color')}
        </Text>
      </View>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest } }) => (
          <FormControl style={margin('bottom')('s')} isRequired label={t('Name')}>
            <BottomSheetTextInput
              autoFocus
              keyboardType="default"
              readOnly={isDisabled}
              placeholder={t('Name')}
              {...rest}
            />
          </FormControl>
        )}
      />
      <Button
        isDisabled={!isValid}
        isSubmitting={isSubmitting}
        onPress={onSubmit}
        size="medium"
        color="primary"
        title={t('Save')}
      />
    </View>
  );
};

export default CategoryForm;
