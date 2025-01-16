import { Skeleton } from '@common/components';
import { rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface SelectOptionSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const SelectOptionSkeleton = ({ style }: SelectOptionSkeletonProps) => (
  <View style={[styles.container, style]}>
    <Skeleton height={36} borderRadius={18} width={36} />
    <Skeleton height={14} borderRadius={7} width={120} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('xs'),
    borderRadius: 12,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default SelectOptionSkeleton;
