import { IconName } from '@icons';
import { center } from '@styles/common';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Svg from './Svg';

export interface IconButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName: IconName;
  size?: number;
  color?: keyof Colors['text'];
  backgroundColor?: keyof Colors['background'];
  iconSize?: number;
}

const IconButton = ({
  onPress,
  style,
  iconName,
  isDisabled = false,
  size = 46,
  iconSize = 20,
  color = 'primary',
  backgroundColor = 'secondary',
}: IconButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: colors.background[backgroundColor],
      },
      style,
    ]}
    disabled={isDisabled}>
    <Svg color={colors.text[color]} size={iconSize} name={iconName} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    borderWidth: 1,
    borderColor: colors.border.primary,
    position: 'relative',
  },
});

export default IconButton;
