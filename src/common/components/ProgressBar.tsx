import { colors } from '@styles/v2/urbanistTheme';
import hexToRgba from 'hex-to-rgba';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

export interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  total: number;
  current: number;
}

const ProgressBar = ({ style, current, total }: ProgressBarProps) => (
  <View style={[styles.container, style]}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.bar, { width: `${(current / total) * 100}%` }]}
      colors={[hexToRgba(colors.background.accent, 0.3), colors.background.accent]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: colors.background.tertiary,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
});

export default ProgressBar;
