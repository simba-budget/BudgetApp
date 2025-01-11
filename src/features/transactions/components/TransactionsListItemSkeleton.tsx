import { Skeleton } from '@common/components';
import { alignEnd, flex1, rowCenter } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface TransactionsListItemSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const TransactionsListItemSkeleton = ({
  style,
}: TransactionsListItemSkeletonProps) => (
  <View style={[styles.container, style]}>
    <Skeleton height={40} borderRadius={20} width={40} />
    <View style={[gap('row')('xs'), flex1]}>
      <Skeleton height={14} borderRadius={7} width={80} />
      <Skeleton height={12} borderRadius={6} width={120} />
    </View>
    <View style={[alignEnd, gap('row')('xs')]}>
      <Skeleton height={14} borderRadius={7} width={70} />
      <Skeleton height={12} borderRadius={6} width={80} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('full')('s'),
    borderRadius: 16,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
});

export default TransactionsListItemSkeleton;
