import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import Text from './Text';

export interface ButtonProps {
  onPress?: () => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
  title: string;
}

const Button = ({ onPress, style, isDisabled = false, title }: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, isDisabled && styles.disabledContainer, style]}
    disabled={isDisabled}>
    <Text color="secondary" weight="medium">
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background.accent,
    height: 50,
    borderRadius: 25,
  },
  disabledContainer: {
    opacity: 0.5,
  },
});

export default Button;
