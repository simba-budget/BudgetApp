import { Skeleton } from '@common/components';
import { center, flex1, rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import range from 'lodash/range';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface AccountSectionSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const AccountSectionSkeleton = ({ style }: AccountSectionSkeletonProps) => (
  <View style={[padding('horizontal')('m'), style]}>
    <View style={styles.container}>
      <View style={[flex1, margin('bottom')('xxs')]}>
        <Skeleton
          style={margin('bottom')('l')}
          width="60%"
          height={32}
          borderRadius={16}
        />
        <Skeleton
          style={margin('bottom')('s')}
          width="30%"
          height={16}
          borderRadius={8}
        />
        <Skeleton width="55%" height={36} borderRadius={18} />
      </View>
      <View style={styles.quickActionContainer}>
        {range(4).map((index) => (
          <View style={[flex1, center]} key={index}>
            <Skeleton
              style={margin('bottom')('xs')}
              width={56}
              height={56}
              borderRadius={28}
            />
            <Skeleton
              style={margin('bottom')('xxxs')}
              width={40}
              height={12}
              borderRadius={6}
            />
            <Skeleton width={50} height={12} borderRadius={6} />
          </View>
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...padding('full')('l'),
    height: 290,
    borderRadius: 30,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderWidth: 1,
  },
  quickActionContainer: {
    ...rowCenter,
    ...gap('column')('s'),
    ...padding('vertical')('xs'),
    borderColor: colors.border.primary,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default AccountSectionSkeleton;
