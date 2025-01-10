import IconButton from '@common/components/IconButton';
import { useCommonTranslations } from '@i18n/hooks';
import { selfCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React from 'react';
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

const Confirmation = ({
  onConfirm,
  description,
  title,
  confirmText,
  isSubmitting = false,
  type = 'default',
  onClose,
}: ConfirmationProps) => {
  const { t } = useCommonTranslations();

  return (
    <View style={[padding('horizontal')('l'), padding('top')('m')]}>
      <IconButton
        style={[selfCenter, margin('bottom')('s')]}
        color="primary"
        size={56}
        iconSize={28}
        iconName="warning"
        isDisabled
      />
      <View style={[gap('row')('xxs'), margin('bottom')('xl')]}>
        <Text color="primary" weight="semiBold" textAlign="center" size="m">
          {title}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="s">
          {description}
        </Text>
      </View>
      <View style={[gap('row')('xs')]}>
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
