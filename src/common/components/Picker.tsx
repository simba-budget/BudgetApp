import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { IconName } from '@icons';
import { gap, padding, sizes } from '@styles/lightTheme';
import { ThemeTextColors } from '@styles/types';
import { scale } from '@styles/utils';
import React, { useCallback, useMemo } from 'react';
import { ListRenderItemInfo, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { scrollIndicatorInsets } from '../constants';

import BottomSheet, { handleHeight } from './BottomSheet';
import { default as PickerOptionComponent } from './PickerOption';

export interface PickerOption<TKey> {
  key: TKey;
  label: string;
  iconName: IconName;
  color?: keyof ThemeTextColors;
  isDisabled?: boolean;
  isHidden?: boolean;
  onPress: () => void;
}

export interface PickerProps<TKey> {
  style?: StyleProp<ViewStyle>;
  options: PickerOption<TKey>[];
  onClose: () => void;
  isOpen: boolean;
}

const Picker = <TKey extends string>(props: PickerProps<TKey>) => {
  const { style, isOpen, options, onClose } = props;
  const { bottom } = useSafeAreaInsets();
  const paddingBottom = useMemo<number>(() => bottom + sizes.m, [bottom]);

  const visibleOptions = useMemo<PickerOption<TKey>[]>(
    () => options.filter(({ isHidden }) => !isHidden),
    [options],
  );

  const snapPoints = useMemo<number[]>(
    () => [getSnapPoint(visibleOptions.length, paddingBottom)],
    [paddingBottom, visibleOptions.length],
  );

  const handleOnOptionPress = useCallback(
    (option: PickerOption<TKey>) => {
      option.onPress();
      onClose();
    },
    [onClose],
  );

  const renderItem = useCallback(
    (info: ListRenderItemInfo<PickerOption<TKey>>) => (
      <PickerOptionComponent
        onPress={() => handleOnOptionPress(info.item)}
        option={info.item}
      />
    ),
    [handleOnOptionPress],
  );

  return (
    <BottomSheet snapPoints={snapPoints} isOpen={isOpen} onClose={onClose}>
      <BottomSheetFlatList
        contentContainerStyle={[styles.content, { paddingBottom }]}
        style={style}
        scrollIndicatorInsets={scrollIndicatorInsets}
        bounces={false}
        data={visibleOptions}
        renderItem={renderItem}
      />
    </BottomSheet>
  );
};

const getSnapPoint = (count: number, paddingBottom: number) => {
  return count * scale(46) + (count - 1) * sizes.m + handleHeight + sizes.xs + paddingBottom;
};

const styles = StyleSheet.create({
  content: {
    ...padding('top')('xs'),
    ...padding('horizontal')('l'),
    ...gap('row')('m'),
  },
});

export default Picker;
