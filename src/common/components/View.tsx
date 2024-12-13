import { colors, sizes } from '@styles/lightTheme';
import { Colors, Sizes } from '@styles/types';
import { scale } from '@styles/utils';
import React, { FC, useMemo } from 'react';
import { View as RNView, ViewProps as RNViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface ViewProps extends RNViewProps {
  p?: keyof Sizes;
  ph?: keyof Sizes;
  pv?: keyof Sizes;
  pb?: keyof Sizes;
  pt?: keyof Sizes;
  mv?: keyof Sizes;
  bgColor?: keyof Colors;
  isBottomSafe?: boolean;
  isTopSafe?: boolean;
  flex1?: boolean;
  gap?: keyof Sizes;
  br?: number;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  direction?: ViewStyle['flexDirection'];
}

const View: FC<ViewProps> = (props) => {
  const {
    p,
    ph,
    pv,
    pb,
    pt,
    style,
    bgColor,
    isBottomSafe = false,
    isTopSafe = false,
    flex1 = false,
    direction,
    align,
    justify,
    gap,
    br,
    mv,
    ...rest
  } = props;

  const { bottom, top } = useSafeAreaInsets();

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      ...(p && { padding: sizes[p] }),
      ...(ph && { paddingHorizontal: sizes[ph] }),
      ...(pv && { paddingVertical: sizes[pv] }),
      ...(gap && { gap: sizes[gap] }),
      ...(pb && { paddingBottom: sizes[pb] }),
      ...(pt && { paddingTop: sizes[pt] }),
      ...(mv && { marginVertical: sizes[mv] }),
      ...(isBottomSafe && { marginBottom: bottom }),
      ...(isTopSafe && { marginTop: top }),
      ...(flex1 && { flex: 1 }),
      ...(br && { borderRadius: scale(br) }),
      ...(direction && { flexDirection: direction }),
      ...(align && { alignItems: align }),
      ...(justify && { justifyContent: justify }),
      ...(bgColor && { backgroundColor: colors[bgColor] }),
    }),
    [
      p,
      ph,
      pv,
      bgColor,
      pb,
      isBottomSafe,
      bottom,
      flex1,
      direction,
      gap,
      align,
      justify,
      pt,
      mv,
      br,
      isTopSafe,
      top,
    ],
  );

  return <RNView style={[containerStyle, style]} {...rest} />;
};

export default View;
