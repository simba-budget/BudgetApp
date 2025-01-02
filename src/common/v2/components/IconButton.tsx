import { IconName } from '@icons';
import { center } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Svg from './Svg';

export interface IconButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName: IconName;
}

const IconButton = ({
  onPress,
  style,
  iconName,
  isDisabled = false,
}: IconButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, isDisabled && styles.disabledContainer, style]}
    disabled={isDisabled}>
    <Svg color={colors.text.primary} size={20} name={iconName} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    borderWidth: 1,
    width: 46,
    height: 46,
    borderRadius: 23,
    position: 'relative',
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
  },
  disabledContainer: {
    opacity: 0.5,
  },
});

export default IconButton;
