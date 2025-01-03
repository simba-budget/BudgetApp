import { padding } from '@styles/lightTheme';
import { Colors, FontSizes } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Text from './Text';

export type ButtonSize = 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
  size?: ButtonSize;
  color?: ButtonColor;
}

const Button = ({
  onPress,
  style,
  isDisabled = false,
  title,
  size = 'medium',
  color = 'primary',
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {
        borderColor: colors.border[borderColorMap[color]],
        backgroundColor: colors.background[backgroundColorMap[color]],
      },
      containerSizeMap[size],
      style,
    ]}
    disabled={isDisabled}>
    <Text size={titleSizeMap[size]} color={titleColorMap[color]} weight="medium">
      {title}
    </Text>
  </TouchableOpacity>
);

const titleColorMap: Record<ButtonColor, keyof Colors['text']> = {
  primary: 'secondary',
  secondary: 'primary',
};

const borderColorMap: Record<ButtonColor, keyof Colors['border']> = {
  primary: 'accent',
  secondary: 'primary',
};

const backgroundColorMap: Record<ButtonColor, keyof Colors['background']> = {
  primary: 'accent',
  secondary: 'tertiary',
};

const titleSizeMap: Record<ButtonSize, keyof FontSizes> = {
  small: 's',
  medium: 's',
};

const containerSizeMap: Record<ButtonSize, ViewStyle> = {
  small: {
    ...padding('horizontal')('xl'),
    height: 38,
    borderRadius: 19,
  },
  medium: {
    ...padding('horizontal')('xl'),
    height: 52,
    borderRadius: 26,
  },
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
