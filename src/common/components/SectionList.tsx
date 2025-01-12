import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  RefreshControl,
  SectionList as RNSectionList,
  SectionListProps as RNSectionListProps,
  StyleSheet,
} from 'react-native';

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
  isFetchingMore?: boolean;
}

const SectionList = <T,>({
  isFetchingMore = false,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: SectionListProps<T>) => (
  <RNSectionList<T, Section<T>>
    showsVerticalScrollIndicator={false}
    stickySectionHeadersEnabled={false}
    scrollIndicatorInsets={scrollIndicatorInsets}
    renderSectionHeader={SectionHeader}
    contentContainerStyle={[styles.container, contentContainerStyle]}
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

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('m'),
    ...gap('row')('xs'),
    flexGrow: 1,
  },
});

export default SectionList;
