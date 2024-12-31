import { IconName } from '@icons';
import { flex1, rowCenter } from '@styles/common';
import { colors, fonts, fontSizes, gap, padding } from '@styles/lightTheme';
import { Colors, ThemeTextColors } from '@styles/types';
import React, { FC, useMemo, useState } from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';

import Svg from './Svg';

export type InputStatus = 'default' | 'focus' | 'error';

export interface InputProps
  extends Omit<
    RNTextInputProps,
    'style' | 'placeholderTextColor' | 'onChange' | 'onChangeText' | 'value'
  > {
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string | null;
  onChange?: (text: string) => void;
  isError?: boolean;
  iconName?: IconName;
}

const Input: FC<InputProps> = (props) => {
  const {
    style,
    inputStyle,
    onChange,
    secureTextEntry = false,
    isError = false,
    iconName,
    value,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isHidden, setIsHidden] = useState<boolean>(secureTextEntry);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const status = useMemo<InputStatus>(() => {
    if (isFocused) return 'focus';
    if (isError) return 'error';
    return 'default';
  }, [isFocused, isError]);

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      borderColor: colors[borderColorMap[status]],
      backgroundColor: colors[backgroundColorMap[status]],
    }),
    [status],
  );

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <View style={[styles.container, containerStyle, style]}>
      {iconName && <Svg size={22} color={iconColorMap[status]} name={iconName} />}
      <TextInput
        secureTextEntry={isHidden}
        cursorColor={colors.black500}
        placeholderTextColor={colors.grey500}
        onChangeText={onChange}
        style={[styles.input, inputStyle]}
        value={value ?? undefined}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsHidden((prev) => !prev)}>
          <Svg
            size={24}
            color={iconColorMap[status]}
            name={isHidden ? 'hide' : 'show'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('s'),
    ...rowCenter,
    ...gap('column')('xs'),
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
  },
  input: {
    ...flex1,
    ...fonts.spaceGrotesk.medium,
    height: '100%',
    padding: 0,
    fontSize: fontSizes.s.fontSize,
    lineHeight: 18,
    color: colors.black500,
  },
});

export const borderColorMap: Record<InputStatus, keyof Colors> = {
  default: 'grey100',
  focus: 'primary500',
  error: 'error700',
};

export const backgroundColorMap: Record<InputStatus, keyof Colors> = {
  default: 'white',
  focus: 'lightGrey500',
  error: 'white',
};

export const iconColorMap: Record<InputStatus, keyof ThemeTextColors> = {
  default: 'secondary',
  focus: 'highlightPrimary',
  error: 'error',
};

export default Input;
