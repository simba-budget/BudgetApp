import React from 'react';
import { TextInputProps as RNTextInputProps, StyleSheet, TextInput } from 'react-native';

export interface InputProps
  extends Omit<RNTextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  value?: string | null | number;
  onChange?: (text: string) => void;
}

const Input = ({ onChange, value, style, ...rest }: InputProps) => (
  <TextInput
    onChangeText={onChange}
    style={[styles.container, style]}
    value={value?.toString() ?? undefined}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Input;
