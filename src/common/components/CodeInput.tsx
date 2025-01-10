import CodeInputCell from '@common/components/CodeInputCell';
import { center } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React from 'react';
import { Platform, StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { CodeField, useBlurOnFulfill } from 'react-native-confirmation-code-field';

export interface CodeInputProps
  extends Pick<TextInputProps, 'onBlur' | 'onFocus' | 'autoFocus' | 'value'> {
  style?: StyleProp<ViewStyle>;
  onChange: (value: string) => void;
  cellCount?: number;
}

const autoComplete: TextInputProps['autoComplete'] = Platform.select({
  android: 'sms-otp',
  default: 'one-time-code',
});

const CodeInput = ({
  onChange,
  cellCount = 6,
  style,
  value,
  ...rest
}: CodeInputProps) => {
  const ref = useBlurOnFulfill({ value, cellCount });

  return (
    <CodeField
      ref={ref}
      value={value}
      autoCorrect={false}
      onChangeText={onChange}
      cellCount={cellCount}
      rootStyle={[center, gap('column')('xs'), style]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={autoComplete}
      renderCell={({ index, symbol, isFocused }) => (
        <CodeInputCell isFocused={isFocused} key={index} value={symbol} />
      )}
      {...rest}
    />
  );
};

export default CodeInput;
