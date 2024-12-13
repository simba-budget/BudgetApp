import { colors, sizes } from '@styles/lightTheme';
import { Sizes } from '@styles/types';
import hexToRgba from 'hex-to-rgba';
import React, { FC, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

export interface SkeletonProps {
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  mv?: keyof Sizes;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  isDark?: boolean;
}

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Skeleton: FC<SkeletonProps> = (props) => {
  const { style, width, height, borderRadius, isDark = false, mv } = props;

  const shimmerColors = useMemo<string[]>(() => (isDark ? darkColors : lightColors), [isDark]);

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      width,
      height,
      borderRadius,
      ...(mv && { marginVertical: sizes[mv] }),
    }),
    [width, height, borderRadius, mv],
  );

  return (
    <ShimmerPlaceholder
      location={[0, 1]}
      duration={2000}
      shimmerColors={shimmerColors}
      style={[containerStyle, style]}
      visible={false}
    />
  );
};

const lightColors = [hexToRgba(colors.grey100, 0.6), colors.lightGrey500];
const darkColors = [hexToRgba(colors.white, 0.1), hexToRgba(colors.white, 0)];

export default Skeleton;
