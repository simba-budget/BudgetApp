import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

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
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 46,
  },
  disabledContainer: {
    opacity: 0.5,
  },
  text: {
    color: '#FFFFFF',
  },
});

export default Button;
