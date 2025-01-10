import { IconName } from '@icons';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import Svg from './Svg';

export interface InputProps
  extends Omit<
    RNTextInputProps,
    'onChange' | 'onChangeText' | 'value' | 'style' | 'keyboardAppearance'
  > {
  value?: string | null | number;
  onChange?: (text: string) => void;
  iconName: IconName;
  inputStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const Input = ({
  onChange,
  value,
  style,
  inputStyle,
  iconName,
  ...rest
}: InputProps) => (
  <View style={[styles.container, style]}>
    <Svg
      style={styles.icon}
      size={22}
      name={iconName}
      color={colors.text.tertiary}
    />
    <TextInput
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
    paddingLeft: 40,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: colors.background.tertiary,
    borderColor: colors.border.primary,
  },
});

export default Input;
