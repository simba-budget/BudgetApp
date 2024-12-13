import Svg from '@common/components/Svg';
import { IconName } from '@icons';
import { center, rowCenter } from '@styles/common';
import { colors, gap, padding, themeTextColors } from '@styles/lightTheme';
import { FontSizes, ThemeTextColors } from '@styles/types';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import TextBody, { TextBodyProps } from './TextBody';
export type ButtonSize = 'small' | 'medium';
export type ButtonVariant =
  | 'primary'
  | 'primaryOutline'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'tertiaryOutline';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: ButtonSize;
  variant?: ButtonVariant;
  title: string;
  iconName?: IconName;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    onPress,
    style,
    isDisabled = false,
    isLoading = false,
    variant = 'primary',
    size = 'medium',
    title,
    iconName,
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        containerSizeMap[size],
        containerVariantMap[variant],
        (isLoading || isDisabled) && styles.disabledContainer,
        style,
      ]}
      disabled={isDisabled || isLoading}>
      {!!iconName && (
        <Svg size={iconSizeMap[size]} color={textColorMap[variant]} name={iconName} />
      )}
      <TextBody
        weight={textWeightMap[variant]}
        color={textColorMap[variant]}
        size={textSizeMap[size]}>
        {title}
      </TextBody>
      {isLoading && (
        <ActivityIndicator
          size={iconSizeMap[size]}
          color={colors[themeTextColors[textColorMap[variant]]]}
        />
      )}
    </TouchableOpacity>
  );
};

const containerSizeMap: Record<ButtonSize, ViewStyle> = {
  small: {
    ...padding('horizontal')('s'),
    height: 30,
    borderRadius: 15,
  },
  medium: {
    ...padding('horizontal')('m'),
    height: 52,
    borderRadius: 26,
  },
};

const iconSizeMap: Record<ButtonSize, number> = {
  small: 16,
  medium: 20,
};

const containerVariantMap: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.primary300,
    borderColor: colors.primary300,
  },
  primaryOutline: {
    backgroundColor: colors.transparent,
    borderColor: colors.primary300,
  },
  secondary: {
    backgroundColor: colors.secondary500,
    borderColor: colors.secondary500,
  },
  tertiary: {
    backgroundColor: colors.grey500,
    borderColor: colors.grey500,
  },
  tertiaryOutline: {
    backgroundColor: colors.transparent,
    borderColor: colors.transparent,
  },
  error: {
    backgroundColor: colors.error700,
    borderColor: colors.error700,
  },
};

const textSizeMap: Record<ButtonSize, keyof FontSizes> = {
  small: 'xs',
  medium: 's',
};

const textColorMap: Record<ButtonVariant, keyof ThemeTextColors> = {
  primary: 'white',
  primaryOutline: 'highlightPrimary',
  secondary: 'primary',
  tertiaryOutline: 'secondary',
  tertiary: 'highlightPrimary',
  error: 'white',
};

const textWeightMap: Record<ButtonVariant, TextBodyProps['weight']> = {
  primary: 'bold',
  primaryOutline: 'regular',
  secondary: 'bold',
  tertiaryOutline: 'regular',
  tertiary: 'bold',
  error: 'bold',
};

const styles = StyleSheet.create({
  container: {
    ...center,
    ...rowCenter,
    ...gap('full')('s'),
    borderWidth: 1,
  },
  disabledContainer: {
    opacity: 0.75,
  },
});

export default Button;
