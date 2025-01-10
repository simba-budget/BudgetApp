import { Button, FormControl, Input } from '@common/components';
import { useMembersTranslations } from '@i18n/hooks';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { StyleProp, View, ViewStyle } from 'react-native';

import { SaveMemberRequest } from '../types';

export interface MemberFormProps {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
  isSubmitting: boolean;
  isDisabled?: boolean;
  control: Control<SaveMemberRequest>;
}

const MemberForm = ({
  style,
  isSubmitting,
  onSubmit,
  control,
  isDisabled = false,
}: MemberFormProps) => {
  const { t } = useMembersTranslations();

  return (
    <View style={style}>
      <Controller
        control={control}
        name="role"
        render={({ field: { ref: _, ...rest }, fieldState: { error } }) => (
          <FormControl error={error?.message} label={t('Role')}>
            <Input
              iconName="search"
              {...rest}
              readOnly={isDisabled}
              placeholder={t('Role')}
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

export default MemberForm;
