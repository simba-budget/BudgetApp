import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { padding } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { TextInputProps as RNTextInputProps, StyleSheet } from 'react-native';

export interface BottomSheetTextAreaProps
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
}

const BottomSheetTextArea = ({
  onChange,
  value,
  style,
  ...rest
}: BottomSheetTextAreaProps) => (
  <BottomSheetTextInput
    multiline
    selectionColor={colors.text.tertiary}
    cursorColor={colors.text.primary}
    placeholderTextColor={colors.text.placeholder}
    keyboardAppearance="dark"
    onChangeText={onChange}
    style={[styles.textArea, style]}
    value={value?.toString() ?? undefined}
    {...rest}
  />
);

const styles = StyleSheet.create({
  textArea: {
    ...padding('top')('s'),
    ...padding('horizontal')('m'),
    ...fonts.urbanist.medium,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    minHeight: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.secondary,
  },
});

export default BottomSheetTextArea;
