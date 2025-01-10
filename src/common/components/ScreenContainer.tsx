import { flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface ScreenContainerProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const ScreenContainer = ({ children, style }: ScreenContainerProps) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.background.primary,
  },
});

export default ScreenContainer;
