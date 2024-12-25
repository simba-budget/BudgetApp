import { gap } from '@styles/lightTheme';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

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
  <View style={[gap('row')('xxs'), style]}>
    {!!label && (
      <Text>
        {label}
        {isRequired && <Text style={styles.error}>{' *'}</Text>}
      </Text>
    )}
    {children}
    {error && <Text style={styles.error}>{error}</Text>}
  </View>
);

const styles = StyleSheet.create({
  error: {
    color: '#FF0000',
  },
});

export default FormControl;
