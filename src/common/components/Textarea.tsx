import { padding } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleSheet,
  TextInput,
} from 'react-native';

export interface TextareaProps
  extends Omit<
    RNTextInputProps,
    | 'onChange'
    | 'onChangeText'
    | 'value'
    | 'keyboardAppearance'
    | 'selectionColor'
    | 'cursorColor'
    | 'placeholderTextColor'
  > {
  value?: string | null | number;
  onChange?: (text: string) => void;
  bgColor?: keyof Colors['background'];
}

const Textarea = ({
  onChange,
  value,
  style,
  bgColor = 'tertiary',
  ...rest
}: TextareaProps) => (
  <TextInput
    multiline
    selectionColor={colors.text.tertiary}
    cursorColor={colors.text.primary}
    placeholderTextColor={colors.text.placeholder}
    keyboardAppearance="dark"
    onChangeText={onChange}
    style={[styles.textarea, { backgroundColor: colors.background[bgColor] }, style]}
    value={value?.toString() ?? undefined}
    {...rest}
  />
);

const styles = StyleSheet.create({
  textarea: {
    ...padding('top')('s'),
    ...padding('horizontal')('m'),
    ...fonts.urbanist.medium,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    minHeight: 90,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
});

export default Textarea;
