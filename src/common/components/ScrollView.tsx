import { padding } from '@styles/lightTheme';
import { Sizes } from '@styles/types';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  RefreshControl,
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from 'react-native';

import { scrollIndicatorInsets } from '../constants';

export interface ScrollViewProps
  extends Omit<
    RNScrollViewProps,
    'scrollIndicatorInsets' | 'showsVerticalScrollIndicator'
  > {
  refreshing?: boolean;
  onRefresh?: () => void;
  gap?: keyof Sizes;
}

const ScrollView = ({
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: ScrollViewProps) => (
  <RNScrollView
    showsVerticalScrollIndicator={false}
    scrollIndicatorInsets={scrollIndicatorInsets}
    contentContainerStyle={[padding('horizontal')('m'), contentContainerStyle]}
    refreshControl={
      <RefreshControl
        refreshing={refreshing || false}
        onRefresh={onRefresh || undefined}
        tintColor={colors.text.primary}
      />
    }
    {...rest}
  />
);

export default ScrollView;
