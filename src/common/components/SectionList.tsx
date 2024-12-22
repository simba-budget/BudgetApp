import { BaseModel } from '@api/types';
import { colors, gap, padding, sizes } from '@styles/lightTheme';
import React, { FC, useCallback, useMemo } from 'react';
import {
  SectionList as RNSectionList,
  SectionListRenderItemInfo,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../constants';
import { SectionListSkeleton } from '../skeletons';
import { Section } from '../types';

import SectionHeader from './SectionHeader';

export interface SectionListProps<T> {
  style?: StyleProp<ViewStyle>;
  sections: Section<T>[];
  isLoading: boolean;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  onItemPress?: (item: T) => void;
  onItemLongPress?: (item: T) => void;
  renderItem: FC<SectionListRenderItemInfo<T>>;
}

const SectionList = <T extends BaseModel>(props: SectionListProps<T>) => {
  const {
    sections,
    style,
    onItemPress,
    onItemLongPress,
    isLoading,
    renderItem,
    onRefresh,
    isRefreshing = false,
  } = props;

  const { bottom } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(() => 54 + bottom + sizes.l, [bottom]);

  const renderSectionItem = useCallback(
    (info: SectionListRenderItemInfo<T, Section<T>>) => (
      <TouchableOpacity
        onPress={() => onItemPress?.(info.item)}
        onLongPress={() => onItemLongPress?.(info.item)}>
        {renderItem(info)}
      </TouchableOpacity>
    ),
    [onItemPress, onItemLongPress, renderItem],
  );

  if (isLoading) {
    return <SectionListSkeleton style={styles.content} />;
  }

  return (
    <RNSectionList<T, Section<T>>
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      showsVerticalScrollIndicator={false}
      stickySectionHeadersEnabled={false}
      scrollIndicatorInsets={scrollIndicatorInsets}
      renderSectionHeader={SectionHeader}
      style={style}
      renderItem={renderSectionItem}
      sections={sections}
      contentContainerStyle={[styles.content, { paddingBottom }]}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    ...padding('horizontal')('l'),
    ...padding('top')('l'),
    ...gap('row')('m'),
    backgroundColor: colors.white,
    flexGrow: 1,
  },
});

export default SectionList;
