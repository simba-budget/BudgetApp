import View from '@common/components/View';
import { Colors } from '@styles/types';
import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  color: keyof Colors;
  value: number;
  total: number;
}

const ProgressBar: FC<ProgressBarProps> = (props) => {
  const { style, total, value, color } = props;
  const width = useMemo<number>(() => Math.round((value / total) * 100), [value, total]);

  return (
    <View bgColor="lightGrey500" style={[styles.container, style]}>
      <View style={{ width: `${width}%` }} flex1 bgColor={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 5,
    borderRadius: 3,
    overflow: 'hidden',
  },
});

export default ProgressBar;
