import { Button, FormControl, IconButton, Input, Text } from '@common/components';
import { useCategoriesTranslations } from '@i18n/hooks';
import { selfCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
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
}

const CategoryForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  title,
  isDisabled = false,
}: CategoryFormProps) => {
  const { t } = useCategoriesTranslations();

  return (
    <View style={[padding('horizontal')('m'), padding('top')('m'), style]}>
      <IconButton
        style={[selfCenter, margin('bottom')('s')]}
        color="primary"
        size={56}
        iconSize={28}
        iconName="squaresPlus"
        isDisabled
      />
      <View style={[gap('row')('xxs'), margin('bottom')('xl')]}>
        <Text color="primary" weight="semiBold" textAlign="center" size="m">
          {title}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="s">
          {t('Style object for the card in stack. You can provide')}
        </Text>
      </View>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl
            style={margin('bottom')('s')}
            isRequired
            error={error?.message}
            label={t('Name')}>
            <Input
              autoFocus
              keyboardType="default"
              iconName="userPlus"
              readOnly={isDisabled}
              placeholder={t('Name')}
              {...rest}
            />
          </FormControl>
        )}
      />
      <Button
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
