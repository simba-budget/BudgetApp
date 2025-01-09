import IconButton from '@common/v2/components/IconButton';
import { useCommonTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import React, { FC } from 'react';
import { View } from 'react-native';

import Button, { ButtonColor } from './Button';
import Text from './Text';

export type ConfirmationType = 'default' | 'danger';

export interface ConfirmationProps {
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText: string;
  onClose: () => void;
  type?: ConfirmationType;
  isSubmitting?: boolean;
}

const Confirmation: FC<ConfirmationProps> = (props) => {
  const {
    onConfirm,
    description,
    title,
    confirmText,
    isSubmitting = false,
    type = 'default',
    onClose,
  } = props;

  const { t } = useCommonTranslations();

  return (
    <View
      style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('xl')]}>
      <View style={[gap('row')('s'), center, padding('horizontal')('m')]}>
        <IconButton
          color="primary"
          size={56}
          iconSize={28}
          iconName="warning"
          isDisabled
        />
        <Text color="primary" weight="semiBold" textAlign="center" size="l">
          {title}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="m">
          {description}
        </Text>
      </View>
      <View style={gap('row')('xs')}>
        <Button
          isSubmitting={isSubmitting}
          onPress={onConfirm}
          size="medium"
          color={buttonColorMap[type]}
          title={confirmText}
        />
        <Button
          isDisabled={isSubmitting}
          onPress={onClose}
          size="medium"
          color="tertiary"
          title={t('Cancel')}
        />
      </View>
    </View>
  );
};

const buttonColorMap: Record<ConfirmationType, ButtonColor> = {
  default: 'primary',
  danger: 'error',
};

export default Confirmation;
