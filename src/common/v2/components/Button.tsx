import { IconName } from '@icons';
import { rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { Colors, FontSizes } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Svg from './Svg';
import Text from './Text';

export type ButtonSize = 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
  size?: ButtonSize;
  color?: ButtonColor;
  iconName?: IconName;
}

const Button = ({
  onPress,
  style,
  isDisabled = false,
  title,
  iconName,
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
    {!!iconName && (
      <Svg size={20} color={colors.text[titleColorMap[color]]} name={iconName} />
    )}
    <Text size={titleSizeMap[size]} color={titleColorMap[color]} weight="medium">
      {title}
    </Text>
  </TouchableOpacity>
);

const titleColorMap: Record<ButtonColor, keyof Colors['text']> = {
  primary: 'secondary',
  secondary: 'primary',
  tertiary: 'primary',
};

const borderColorMap: Record<ButtonColor, keyof Colors['border']> = {
  primary: 'accent',
  secondary: 'primary',
  tertiary: 'primary',
};

const backgroundColorMap: Record<ButtonColor, keyof Colors['background']> = {
  primary: 'accent',
  secondary: 'secondary',
  tertiary: 'tertiary',
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
    height: 48,
    borderRadius: 24,
  },
};

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('xs'),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
