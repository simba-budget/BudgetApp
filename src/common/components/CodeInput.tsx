import CodeInputCell from '@common/components/CodeInputCell';
import React, { useEffect } from 'react';
import { Platform, StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { CodeField } from 'react-native-confirmation-code-field';

export interface CodeInputProps
  extends Pick<TextInputProps, 'onBlur' | 'onFocus' | 'autoFocus' | 'value'> {
  style?: StyleProp<ViewStyle>;
  onChange: (value: string) => void;
  cellCount?: number;
  onComplete: () => void;
}

const autoComplete: TextInputProps['autoComplete'] = Platform.select({
  android: 'sms-otp',
  default: 'one-time-code',
});

const CodeInput = ({
  onChange,
  cellCount = 6,
  style,
  onComplete,
  value,
  ...rest
}: CodeInputProps) => {
  useEffect(() => {
    if (value?.length === cellCount) onComplete();
  }, [value, cellCount, onComplete]);

  return (
    <CodeField
      value={value}
      autoCorrect={false}
      onChangeText={onChange}
      cellCount={cellCount}
      rootStyle={style}
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
