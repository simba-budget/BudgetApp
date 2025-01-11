import { IconName } from '@icons';
import { padding, sizes } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
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
  bgColor?: keyof Colors['background'];
}

const Input = ({
  onChange,
  value,
  style,
  inputStyle,
  iconName,
  bgColor = 'tertiary',
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
      style={[
        styles.input,
        { backgroundColor: colors.background[bgColor] },
        inputStyle,
      ]}
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
    borderColor: colors.border.primary,
  },
});

export default Input;
