import { Skeleton, View } from '@common/components';
import { fontSizes } from '@styles/lightTheme';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface SectionHeaderSkeletonProps {
  style?: StyleProp<ViewStyle>;
}

const SectionHeaderSkeleton: FC<SectionHeaderSkeletonProps> = (props) => {
  const { style } = props;

  return (
    <View
      gap="xxs"
      direction="row"
      align="center"
      justify="space-between"
      style={[styles.container, style]}>
      <Skeleton width={100} height={14} borderRadius={7} />
      <Skeleton width={75} height={14} borderRadius={7} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: fontSizes.s.lineHeight,
  },
});

export default SectionHeaderSkeleton;
