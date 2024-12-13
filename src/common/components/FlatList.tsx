import { BaseModel } from '@api/types';
import { colors, gap, padding, sizes } from '@styles/lightTheme';
import React, { FC, useCallback, useMemo } from 'react';
import {
  ListRenderItemInfo,
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../constants';
import { ListSkeleton } from '../skeletons';

export interface FlatListProps<T>
  extends Pick<RNFlatListProps<T>, 'ListHeaderComponent' | 'contentContainerStyle'> {
  style?: StyleProp<ViewStyle>;
  data: T[];
  isLoading: boolean;
  onItemPress?: (item: T) => void;
  onItemLongPress?: (item: T) => void;
  ItemComponent: FC<ListRenderItemInfo<T>>;
  ItemSkeletonComponent?: FC;
  isSafeBottomTab?: boolean;
}

const FlatList = <T extends BaseModel>(props: FlatListProps<T>) => {
  const {
    data,
    style,
    onItemPress,
    onItemLongPress,
    isLoading,
    ItemComponent,
    isSafeBottomTab = false,
    ItemSkeletonComponent,
    ListHeaderComponent,
    contentContainerStyle,
  } = props;

  const { bottom } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(
    () => (isSafeBottomTab ? 54 + bottom : bottom) + sizes.l,
    [bottom, isSafeBottomTab],
  );

  const renderListItem = useCallback(
    (info: ListRenderItemInfo<T>) => (
      <TouchableOpacity
        onPress={() => onItemPress?.(info.item)}
        onLongPress={() => onItemLongPress?.(info.item)}>
        {ItemComponent(info)}
      </TouchableOpacity>
    ),
    [onItemPress, onItemLongPress, ItemComponent],
  );

  if (isLoading) {
    return (
      <ListSkeleton ItemSkeletonComponent={ItemSkeletonComponent} style={styles.content} />
    );
  }

  return (
    <RNFlatList<T>
      bounces={false}
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      scrollIndicatorInsets={scrollIndicatorInsets}
      style={style}
      renderItem={renderListItem}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[styles.content, contentContainerStyle, { paddingBottom }]}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    ...padding('horizontal')('l'),
    ...padding('top')('lg'),
    ...gap('row')('m'),
    backgroundColor: colors.white,
    flexGrow: 1,
  },
});

export default FlatList;
