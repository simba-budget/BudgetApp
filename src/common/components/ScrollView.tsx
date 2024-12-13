import { sizes } from '@styles/lightTheme';
import { Sizes } from '@styles/types';
import React, { forwardRef, useMemo } from 'react';
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type BottomSafeType = 'tabs' | 'default';

export interface ScrollViewProps
  extends Omit<
    RNScrollViewProps,
    | 'scrollIndicatorInsets'
    | 'showsVerticalScrollIndicator'
    | 'showsHorizontalScrollIndicator'
    | 'bounces'
  > {
  gap?: keyof Sizes;
  ph?: keyof Sizes;
  pv?: keyof Sizes;
  bottomSafe?: BottomSafeType;
}

const ScrollView = forwardRef<RNScrollView, ScrollViewProps>((props, ref) => {
  const { gap = 'm', ph = 'l', pv, bottomSafe, contentContainerStyle, ...rest } = props;
  const { bottom } = useSafeAreaInsets();

  const bottomSafePadding = useMemo<number>(() => {
    if (!bottomSafe) return 0;
    return bottomSafe === 'tabs' ? 54 + bottom : bottom;
  }, [bottomSafe, bottom]);

  const contentStyle = useMemo<ViewStyle>(
    () => ({
      gap: sizes[gap],
      paddingHorizontal: sizes[ph],
      ...(pv && { paddingTop: sizes[pv], paddingBottom: sizes[pv] + bottomSafePadding }),
    }),
    [gap, ph, pv, bottomSafePadding],
  );

  return (
    <RNScrollView
      ref={ref}
      bounces={false}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[contentStyle, contentContainerStyle]}
      {...rest}
    />
  );
});

export default ScrollView;
