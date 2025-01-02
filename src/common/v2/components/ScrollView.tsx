import { gap, padding, sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useMemo } from 'react';
import {
  RefreshControl,
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../../constants';

export interface ScrollViewProps
  extends Omit<
    RNScrollViewProps,
    'scrollIndicatorInsets' | 'showsVerticalScrollIndicator'
  > {
  isSafeBottomArea?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const ScrollView = ({
  isSafeBottomArea = false,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: ScrollViewProps) => {
  const { bottom } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(
    () => (isSafeBottomArea ? bottom : 0) + sizes.m,
    [bottom, isSafeBottomArea],
  );

  return (
    <RNScrollView
      showsVerticalScrollIndicator={false}
      scrollIndicatorInsets={scrollIndicatorInsets}
      contentContainerStyle={[
        styles.container,
        contentContainerStyle,
        { paddingBottom },
      ]}
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
};

const styles = StyleSheet.create({
  container: {
    ...padding('full')('m'),
    ...gap('row')('l'),
    flexGrow: 1,
  },
});

export default ScrollView;
