import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { IconName } from '@icons';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import Svg from '../Svg';

export interface BottomSheetInputProps
  extends Omit<
    RNTextInputProps,
    | 'onChange'
    | 'onChangeText'
    | 'value'
    | 'style'
    | 'keyboardAppearance'
    | 'selectionColor'
    | 'cursorColor'
    | 'placeholderTextColor'
  > {
  value?: string | null | number;
  onChange?: (text: string) => void;
  iconName: IconName;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const BottomSheetInput = ({
  onChange,
  value,
  style,
  inputStyle,
  iconName,
  ...rest
}: BottomSheetInputProps) => (
  <View style={[styles.container, style]}>
    <Svg
      style={styles.icon}
      size={22}
      name={iconName}
      color={colors.text.tertiary}
    />
    <BottomSheetTextInput
      selectionColor={colors.text.tertiary}
      cursorColor={colors.text.primary}
      placeholderTextColor={colors.text.placeholder}
      keyboardAppearance="dark"
      onChangeText={onChange}
      style={[styles.input, inputStyle]}
      value={value?.toString() ?? undefined}
      {...rest}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    top: 13,
    position: 'absolute',
    left: sizes.s,
    zIndex: 99,
  },
  input: {
    ...padding('right')('m'),
    ...fonts.urbanist.medium,
    backgroundColor: colors.background.secondary,
    paddingLeft: 40,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
});

export default BottomSheetInput;
