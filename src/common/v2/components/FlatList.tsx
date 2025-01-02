import ListFooter from '@common/v2/components/ListFooter';
import { gap, padding, sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useMemo } from 'react';
import {
  RefreshControl,
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../../constants';

export interface FlatListProps<T>
  extends Omit<
    RNFlatListProps<T>,
    | 'scrollIndicatorInsets'
    | 'refreshControl'
    | 'ListFooterComponent'
    | 'showsVerticalScrollIndicator'
  > {
  isSafeBottomArea?: boolean;
  isFetchingMore?: boolean;
}

const FlatList = <T,>({
  isSafeBottomArea = false,
  isFetchingMore = false,
  contentContainerStyle,
  refreshing,
  onRefresh,
  ...rest
}: FlatListProps<T>) => {
  const { bottom } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(
    () => (isSafeBottomArea ? bottom : 0) + sizes.m,
    [bottom, isSafeBottomArea],
  );

  return (
    <RNFlatList<T>
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

export default FlatList;
