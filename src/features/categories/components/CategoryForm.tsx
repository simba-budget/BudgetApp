import { Button, FormControl, Input, Text } from '@common/components';
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
    <View style={[padding('horizontal')('l'), padding('top')('m'), style]}>
      <View style={[center, padding('horizontal')('m')]}>
        <Text
          style={margin('bottom')('xxxs')}
          textAlign="center"
          color="primary"
          weight="semiBold"
          size="l">
          {title}
        </Text>
        <Text
          textAlign="center"
          style={margin('bottom')('l')}
          weight="medium"
          color="tertiary"
          size="s">
          {t('Style object for the card in stack. You can provide a custom color')}
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
              bgColor="secondary"
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
