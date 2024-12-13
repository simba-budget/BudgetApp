import { useCommonTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import { Colors, ThemeTextColors } from '@styles/types';
import React, { FC, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheet from './BottomSheet';
import Button, { ButtonVariant } from './Button';
import Svg from './Svg';
import TextBody from './TextBody';
import TextHeading from './TextHeading';
import View from './View';

export type ConfirmationType = 'default' | 'danger';

export interface ConfirmationProps {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  isSubmitting?: boolean;
  isDisabled?: boolean;
  description: string;
  onConfirm: () => void;
  confirmText: string;
  color?: keyof Colors;
  type?: ConfirmationType;
}

const Confirmation: FC<ConfirmationProps> = (props) => {
  const {
    onConfirm,
    description,
    title,
    onClose,
    isOpen,
    confirmText,
    isSubmitting = false,
    isDisabled = false,
    type = 'default',
  } = props;

  const { bottom } = useSafeAreaInsets();
  const { t } = useCommonTranslations();
  const snapPoints = useMemo<number[]>(() => [bottom + 300], [bottom]);

  return (
    <BottomSheet snapPoints={snapPoints} isOpen={isOpen} onClose={onClose}>
      <View pt="xs" ph="l" flex1 align="center">
        <Svg size={56} name="warning" color={iconColorMap[type]} />
        <View pb="l" gap="xs" flex1 align="center" justify="center">
          <TextHeading weight="bold" numberOfLines={2} textAlign="center" size="m">
            {title}
          </TextHeading>
          <TextBody
            color="secondary"
            style={padding('horizontal')('s')}
            numberOfLines={3}
            textAlign="center">
            {description}
          </TextBody>
        </View>
      </View>
      <View ph="l" isBottomSafe gap="xs">
        <Button
          isDisabled={isDisabled}
          isLoading={isSubmitting}
          onPress={onConfirm}
          size="medium"
          variant={buttonVariantMap[type]}
          title={confirmText}
        />
        <Button
          onPress={onClose}
          size="medium"
          variant="tertiaryOutline"
          title={t('Cancel')}
        />
      </View>
    </BottomSheet>
  );
};

const buttonVariantMap: Record<ConfirmationType, ButtonVariant> = {
  default: 'primary',
  danger: 'error',
};

const iconColorMap: Record<ConfirmationType, keyof ThemeTextColors> = {
  default: 'highlightPrimary',
  danger: 'error',
};

export default Confirmation;
