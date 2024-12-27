import { padding } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { TextInputProps as RNTextInputProps, StyleSheet, TextInput } from 'react-native';

export interface InputProps
  extends Omit<RNTextInputProps, 'onChange' | 'onChangeText' | 'value'> {
  value?: string | null | number;
  onChange?: (text: string) => void;
}

const Input = ({ onChange, value, style, ...rest }: InputProps) => (
  <TextInput
    placeholderTextColor={colors.text.placeholder}
    onChangeText={onChange}
    style={[styles.container, style]}
    value={value?.toString() ?? undefined}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('m'),
    ...fonts.urbanist.medium,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
  },
});

export default Input;
