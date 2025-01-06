import { IconName } from '@icons';
import { center } from '@styles/common';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Svg from './Svg';

export type IconButtonColor = 'primary' | 'secondary' | 'accent';

export interface IconButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName: IconName;
  size?: number;
  iconSize?: number;
  color?: IconButtonColor;
}

const IconButton = ({
  onPress,
  style,
  iconName,
  isDisabled = false,
  size = 46,
  iconSize = 20,
  color = 'primary',
}: IconButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        borderColor: colors.border[borderColorMap[color]],
        backgroundColor: colors.background[backgroundColorMap[color]],
      },
      style,
    ]}
    disabled={isDisabled}>
    <Svg color={colors.text[iconColorMap[color]]} size={iconSize} name={iconName} />
  </TouchableOpacity>
);

const iconColorMap: Record<IconButtonColor, keyof Colors['text']> = {
  primary: 'primary',
  secondary: 'primary',
  accent: 'secondary',
};

const borderColorMap: Record<IconButtonColor, keyof Colors['border']> = {
  primary: 'primary',
  secondary: 'primary',
  accent: 'accent',
};

const backgroundColorMap: Record<IconButtonColor, keyof Colors['background']> = {
  primary: 'tertiary',
  secondary: 'secondary',
  accent: 'accentSecondary',
};

const styles = StyleSheet.create({
  container: {
    ...center,
    borderWidth: 1,
    position: 'relative',
  },
});

export default IconButton;
