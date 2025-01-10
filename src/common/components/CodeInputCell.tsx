import { center } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Cursor } from 'react-native-confirmation-code-field';

import Text from './Text';

export interface CodeInputCellProps {
  style?: StyleProp<ViewStyle>;
  value: string;
  isFocused: boolean;
}

const CodeInputCell = ({ style, isFocused, value }: CodeInputCellProps) => (
  <View style={[styles.container, isFocused && styles.activeContainer, style]}>
    {value && (
      <Text style={styles.label} size="xl" weight="medium" color="primary">
        {value}
      </Text>
    )}
    {isFocused && (
      <Text style={styles.cursor} size="xl" weight="medium" color="primary">
        <Cursor />
      </Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    width: 56,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.secondary,
    textAlign: 'center',
  },
  activeContainer: {
    borderColor: colors.text.tertiary,
    backgroundColor: colors.background.tertiary,
  },
  label: {
    lineHeight: undefined,
  },
  cursor: {
    paddingBottom: 2,
    lineHeight: undefined,
  },
});

export default CodeInputCell;
