import { Skeleton } from '@common/components';
import { flex1, justifyBetween, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface GoalsListItemSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const GoalsListItemSkeleton = ({ style }: GoalsListItemSkeletonProps) => (
  <View style={[styles.container, style]}>
    <View style={[rowCenter, gap('column')('s'), margin('bottom')('s')]}>
      <Skeleton height={42} borderRadius={21} width={42} />
      <View style={[flex1, gap('row')('xs')]}>
        <Skeleton height={14} borderRadius={7} width={80} />
        <Skeleton height={12} borderRadius={6} width={120} />
      </View>
    </View>
    <View style={[gap('row')('xs'), margin('bottom')('l')]}>
      <Skeleton height={14} borderRadius={7} width="100%" />
      <Skeleton height={14} borderRadius={7} width="100%" />
      <Skeleton height={14} borderRadius={7} width="60%" />
    </View>
    <View
      style={[
        rowCenter,
        justifyBetween,
        margin('bottom')('xs'),
        margin('top')('xxs'),
      ]}>
      <Skeleton height={14} borderRadius={7} width={70} />
      <Skeleton height={14} borderRadius={7} width={70} />
    </View>
    <Skeleton height={10} borderRadius={5} width="100%" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default GoalsListItemSkeleton;
