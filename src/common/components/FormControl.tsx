import { gap } from '@styles/lightTheme';
import React, { FC, ReactNode } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import TextHeading from './TextHeading';

export interface FormControlProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: string;
  isRequired?: boolean;
  children: ReactNode;
  labelStyle?: StyleProp<TextStyle>;
}

const FormControl: FC<FormControlProps> = (props) => {
  const { style, label, children, isRequired = false, error = false, labelStyle } = props;

  return (
    <View style={[gap('row')('xxs'), style]}>
      {!!label && (
        <TextHeading style={labelStyle} size="xs">
          {label}
          {isRequired && (
            <TextHeading size="xs" color="error">
              {' *'}
            </TextHeading>
          )}
        </TextHeading>
      )}
      {children}
      {error && (
        <TextHeading size="xs" color="error">
          {error}
        </TextHeading>
      )}
    </View>
  );
};

export default FormControl;
