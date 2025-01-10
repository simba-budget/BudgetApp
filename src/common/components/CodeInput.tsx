import CodeInputCell from '@common/components/CodeInputCell';
import { center } from '@styles/common';
import { gap } from '@styles/lightTheme';
import React, { useCallback, useEffect, useRef } from 'react';
import { Platform, StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { CodeField, RenderCellOptions } from 'react-native-confirmation-code-field';

export interface CodeInputProps
  extends Omit<
    TextInputProps,
    | 'style'
    | 'onChange'
    | 'onChangeText'
    | 'autoComplete'
    | 'autoCorrect'
    | 'keyboardType'
    | 'textContentType'
  > {
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
  value = '',
  onComplete,
  ...rest
}: CodeInputProps) => {
  const isCompletedRef = useRef(false);

  useEffect(() => {
    if (value.length === cellCount && !isCompletedRef.current) {
      onComplete();
      isCompletedRef.current = true;
    } else if (value.length !== cellCount) {
      isCompletedRef.current = false;
    }
  }, [value, cellCount, onComplete]);

  const renderCell = useCallback(
    ({ index, symbol, isFocused }: RenderCellOptions) => (
      <CodeInputCell isFocused={isFocused} key={index} value={symbol} />
    ),
    [],
  );

  return (
    <CodeField
      value={value}
      autoCorrect={false}
      onChangeText={onChange}
      cellCount={cellCount}
      rootStyle={[center, gap('column')('xs'), style]}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={autoComplete}
      renderCell={renderCell}
      {...rest}
    />
  );
};

export default CodeInput;
