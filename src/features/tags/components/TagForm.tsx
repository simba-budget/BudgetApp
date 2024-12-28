import { Button, FormControl, Input } from '@common/v2/components';
import { useTagsTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveTagRequest } from '../types';

export interface TagFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveTagRequest>;
}

const TagForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: TagFormProps) => {
  const { t } = useTagsTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="name"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Name')}>
            <Input {...rest} readOnly={isDisabled} placeholder={t('Name')} />
          </FormControl>
        )}
      />
      <Button onPress={onSubmit} isDisabled={isSubmitting || isDisabled} title={t('Save')} />
    </View>
  );
};

export default TagForm;
