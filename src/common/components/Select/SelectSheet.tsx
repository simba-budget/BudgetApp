import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { ReactNode } from 'react';
import { ListRenderItem } from 'react-native';

import { scrollIndicatorInsets } from '../../constants';
import { BottomSheet } from '../BottomSheet';
import SkeletonsList from '../SkeletonsList';
import Text from '../Text';

import SelectOptionSkeleton from './SelectOptionSkeleton';
import SelectSearch from './SelectSearch';
import { SelectOption as SelectOptionType } from './types';

export interface SelectSheetProps<T> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  options: SelectOptionType<T>[];
  renderOption: ListRenderItem<SelectOptionType<T>>;
  onKeywordChange: (keyword: string) => void;
  isLoading: boolean;
  paddingBottom: number;
  renderFooter?: () => ReactNode;
}

const SelectSheet = <T,>({
  isOpen,
  onClose,
  options,
  title,
  renderOption,
  onKeywordChange,
  isLoading,
  renderFooter,
  paddingBottom,
}: SelectSheetProps<T>) => (
  <BottomSheet
    enableDynamicSizing={false}
    snapPoints={['95%']}
    isOpen={isOpen}
    onClose={onClose}>
    <Text
      style={[margin('bottom')('m'), padding('horizontal')('m')]}
      size="m"
      color="primary"
      textAlign="center"
      weight="semiBold">
      {title}
    </Text>
    <SelectSearch style={margin('bottom')('s')} onKeywordChange={onKeywordChange} />
    {isLoading ? (
      <SkeletonsList
        itemsCount={6}
        style={padding('top')('xxs')}
        ItemComponent={SelectOptionSkeleton}
      />
    ) : (
      <BottomSheetFlatList
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        scrollIndicatorInsets={scrollIndicatorInsets}
        keyExtractor={(option) => option.key}
        contentContainerStyle={[
          gap('row')('xs'),
          padding('top')('xxs'),
          padding('horizontal')('m'),
          { paddingBottom },
        ]}
        data={options}
        renderItem={renderOption}
      />
    )}
    {renderFooter?.()}
  </BottomSheet>
);

export default SelectSheet;
