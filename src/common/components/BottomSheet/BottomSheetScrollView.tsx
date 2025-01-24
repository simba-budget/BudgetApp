import { BottomSheetScrollView as RNBottomSheetScrollView } from '@gorhom/bottom-sheet';
import type { BottomSheetScrollViewProps as RNBottomSheetScrollViewProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types';
import { padding } from '@styles/lightTheme';
import { Sizes } from '@styles/types';
import React from 'react';

import { scrollIndicatorInsets } from '../../constants';

export interface BottomSheetScrollViewProps
  extends Omit<
    RNBottomSheetScrollViewProps,
    'scrollIndicatorInsets' | 'showsVerticalScrollIndicator'
  > {
  gap?: keyof Sizes;
}

const BottomSheetScrollView = ({
  contentContainerStyle,
  ...rest
}: BottomSheetScrollViewProps) => (
  <RNBottomSheetScrollView
    showsVerticalScrollIndicator={false}
    scrollIndicatorInsets={scrollIndicatorInsets}
    contentContainerStyle={[padding('horizontal')('m'), contentContainerStyle]}
    {...rest}
  />
);

export default BottomSheetScrollView;
