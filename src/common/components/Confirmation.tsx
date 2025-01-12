import IconButton from '@common/components/IconButton';
import { useCommonTranslations } from '@i18n/hooks';
import { center, selfCenter } from '@styles/common';
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
    <View style={padding('horizontal')('l')}>
      <IconButton
        style={[selfCenter, margin('bottom')('s')]}
        color="primary"
        size={56}
        iconSize={28}
        iconName="warning"
        isDisabled
      />
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
