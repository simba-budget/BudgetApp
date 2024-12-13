import { mountTime } from '@common/constants';
import { useCommonTranslations } from '@i18n/hooks';
import { gap, padding, sizes, theme } from '@styles/lightTheme';
import React, { ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, View, ViewStyle } from 'react-native';

import HorizontalFilterItem, { HorizontalFilterItemSize } from './HorizontalFilterItem';

export interface HorizontalFilterOption<T> {
  value: T;
  label: string;
}

export interface HorizontalFilterProps<T> {
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  value?: T | null;
  onChange?: (value: T | null) => void;
  options: HorizontalFilterOption<T>[];
  isAllOptionHidden?: boolean;
  size?: HorizontalFilterItemSize;
  allLabel?: string;
}

const HorizontalFilter = <T extends unknown>(props: HorizontalFilterProps<T>) => {
  const {
    style,
    onChange,
    options,
    value,
    contentStyle,
    size,
    isAllOptionHidden = false,
    allLabel,
  } = props;

  const { t } = useCommonTranslations();
  const ref = useRef<FlatList>(null);

  const renderItem = useCallback(
    (info: ListRenderItemInfo<HorizontalFilterOption<T>>) => {
      const { item } = info;
      const isSelected = item.value === value;

      return (
        <HorizontalFilterItem
          size={size}
          isSelected={isSelected}
          onPress={() => onChange?.(item.value)}
          label={item.label}
        />
      );
    },
    [value, onChange, size],
  );

  const MemoizedListHeader = useMemo<ReactElement>(
    () => (
      <HorizontalFilterItem
        size={size}
        isSelected={!value}
        onPress={() => onChange?.(null)}
        label={allLabel ?? t('All')}
      />
    ),
    [value, onChange, t, size, allLabel],
  );

  const scrollToStart = useCallback(() => {
    if (!ref.current) return;
    ref.current.scrollToOffset({ offset: 0, animated: true });
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!ref.current) return;
    ref.current.scrollToIndex({ index, animated: true, viewOffset: sizes.l });
  }, []);

  useEffect(() => {
    const index = options.findIndex((item) => item.value === value);
    if (index === -1) setTimeout(scrollToStart, mountTime);
    else setTimeout(() => scrollToIndex(index), mountTime);
  }, [value, options, scrollToStart, scrollToIndex]);

  return (
    <View style={style}>
      <FlatList
        ref={ref}
        horizontal
        bounces={false}
        ListHeaderComponent={!isAllOptionHidden ? MemoizedListHeader : undefined}
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={console.log}
        data={options}
        renderItem={renderItem}
        contentContainerStyle={[
          gap('full')('xs'),
          padding('horizontal')(theme.layout.padding),
          contentStyle,
        ]}
      />
    </View>
  );
};

export default HorizontalFilter;
