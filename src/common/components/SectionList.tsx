import { gap, padding, sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useMemo } from 'react';
import {
  RefreshControl,
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../constants';
import { Section } from '../types';

import ListFooter from './ListFooter';
import SectionHeader from './SectionHeader';

export interface SectionListProps<T>
  extends Omit<
    RNSectionListProps<T, Section<T>>,
    | 'scrollIndicatorInsets'
    | 'renderSectionHeader'
    | 'ListFooterComponent'
    | 'showsVerticalScrollIndicator'
    | 'stickySectionHeadersEnabled'
  > {
  isSafeBottomArea?: boolean;
  isFetchingMore?: boolean;
}

const SectionList = <T,>({
  isSafeBottomArea = false,
  isFetchingMore = false,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: SectionListProps<T>) => {
  const { bottom } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(
    () => (isSafeBottomArea ? bottom : 0) + sizes.m,
    [bottom, isSafeBottomArea],
  );

  return (
    <RNSectionList<T, Section<T>>
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      scrollIndicatorInsets={scrollIndicatorInsets}
      renderSectionHeader={SectionHeader}
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
      ListFooterComponent={<ListFooter isFetchingMore={isFetchingMore} />}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('m'),
    ...gap('row')('xs'),
    flexGrow: 1,
  },
});

export default SectionList;
