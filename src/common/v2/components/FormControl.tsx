import { gap } from '@styles/lightTheme';
import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import Text from './Text';

export interface FormControlProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  error?: string;
  isRequired?: boolean;
  children: ReactNode;
}

const FormControl = ({
  style,
  label,
  children,
  error,
  isRequired = false,
}: FormControlProps) => (
  <View style={[gap('row')('xxxs'), style]}>
    {!!label && (
      <Text color="primary" weight="medium" size="s">
        {label}
        {isRequired && (
          <Text color="error" size="s">
            {' *'}
          </Text>
        )}
      </Text>
    )}
    {children}
    {error && (
      <Text weight="medium" color="error" size="xs">
        {error}
      </Text>
    )}
  </View>
);

export default FormControl;
