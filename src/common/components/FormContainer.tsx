import { useCommonTranslations } from '@i18n/hooks';
import React, { FC, ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Button from './Button';
import ScrollView from './ScrollView';
import View from './View';

export interface FormContainerProps {
  style?: StyleProp<ViewStyle>;
  isSubmitting: boolean;
  isDisabled?: boolean;
  onSubmit: () => void;
  onCancel: () => void;
  children: ReactNode;
}

const FormContainer: FC<FormContainerProps> = (props) => {
  const {
    style,
    isDisabled = false,
    onSubmit,
    isSubmitting,
    children,
    onCancel,
  } = props;
  const { t } = useCommonTranslations();

  return (
    <View flex1 style={style}>
      <ScrollView pv="l">{children}</ScrollView>
      <View gap="xs" isBottomSafe ph="l" pv="m">
        <Button
          onPress={onSubmit}
          isDisabled={isDisabled}
          isLoading={isSubmitting}
          title={t('Save')}
        />
        <Button
          variant="tertiaryOutline"
          onPress={onCancel}
          isDisabled={isDisabled || isSubmitting}
          title={t('Cancel')}
        />
      </View>
    </View>
  );
};

export default FormContainer;
