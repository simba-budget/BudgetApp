import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { TextInputProps as RNTextInputProps, StyleSheet } from 'react-native';

export interface BottomSheetAmountInputProps
  extends Omit<
    RNTextInputProps,
    | 'onChange'
    | 'onChangeText'
    | 'value'
    | 'keyboardAppearance'
    | 'selectionColor'
    | 'cursorColor'
    | 'placeholderTextColor'
    | 'keyboardType'
    | 'placeholder'
  > {
  value?: string | null | number;
  onChange?: (text: string) => void;
}

const BottomSheetAmountInput = ({
  onChange,
  value,
  style,
  ...rest
}: BottomSheetAmountInputProps) => (
  <BottomSheetTextInput
    selectionColor={colors.text.tertiary}
    cursorColor={colors.text.primary}
    placeholderTextColor={colors.text.placeholder}
    keyboardAppearance="dark"
    keyboardType="numeric"
    placeholder="0.00"
    onChangeText={onChange}
    style={[styles.container, style]}
    value={value?.toString() ?? undefined}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    ...fonts.urbanist.semiBold,
    backgroundColor: colors.background.primary,
    fontSize: fontSizes.xxl.fontSize,
    color: colors.text.primary,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
    textAlign: 'center',
  },
});

export default BottomSheetAmountInput;
