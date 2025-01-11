import { colors } from '@styles/v2/urbanistTheme';
import hexToRgba from 'hex-to-rgba';
import React, { useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

export interface SkeletonProps {
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
}

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Skeleton = ({ style, width, height, borderRadius }: SkeletonProps) => {
  const containerStyle = useMemo<ViewStyle>(
    () => ({ width, height, borderRadius }),
    [width, height, borderRadius],
  );

  return (
    <ShimmerPlaceholder
      location={[0, 1]}
      duration={2000}
      shimmerColors={[
        hexToRgba(colors.background.tertiary, 0.6),
        colors.background.tertiary,
      ]}
      style={[containerStyle, style]}
      visible={false}
    />
  );
};

export default Skeleton;
