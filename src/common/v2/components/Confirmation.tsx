import { useCommonTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React, { FC } from 'react';
import { View } from 'react-native';

import Button, { ButtonColor } from './Button';
import Svg from './Svg';
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
    <View style={[padding('horizontal')('m'), padding('top')('m'), gap('row')('l')]}>
      <View style={[gap('row')('xs'), center, padding('horizontal')('m')]}>
        <Svg size={56} name="warning" color={colors.text[iconColorMap[type]]} />
        <Text color="primary" weight="semiBold" textAlign="center" size="l">
          {title}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="s">
          {description}
        </Text>
      </View>
      <View style={gap('row')('xs')}>
        <Button
          isDisabled={isSubmitting}
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

const iconColorMap: Record<ConfirmationType, keyof Colors['text']> = {
  default: 'accent',
  danger: 'error',
};

const buttonColorMap: Record<ConfirmationType, ButtonColor> = {
  default: 'primary',
  danger: 'error',
};

export default Confirmation;
