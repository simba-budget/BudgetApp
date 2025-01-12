import ListFooter from '@common/components/ListFooter';
import { gap, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import {
  RefreshControl,
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  StyleSheet,
} from 'react-native';

import { scrollIndicatorInsets } from '../constants';

export interface FlatListProps<T>
  extends Omit<
    RNFlatListProps<T>,
    | 'scrollIndicatorInsets'
    | 'refreshControl'
    | 'ListFooterComponent'
    | 'showsVerticalScrollIndicator'
  > {
  isFetchingMore?: boolean;
}

const FlatList = <T,>({
  isFetchingMore = false,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: FlatListProps<T>) => (
  <RNFlatList<T>
    showsVerticalScrollIndicator={false}
    scrollIndicatorInsets={scrollIndicatorInsets}
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

export default FlatList;
